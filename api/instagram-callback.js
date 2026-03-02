// api/instagram-callback.js
// Meta redirects here after user approves Instagram OAuth.
// Exchanges code for a long-lived token and stores it in Firestore.

import { getDb } from './_firebase.js';

export default async function handler(req, res) {
    const { code, state: uid, error } = req.query;
    const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;

    if (error) return res.redirect(`${appUrl}/dashboard.html?error=instagram_denied`);
    if (!code || !uid) return res.status(400).send('Missing code or uid');

    try {
        // 1. Exchange code for short-lived token
        const tokenBody = new URLSearchParams({
            client_id: process.env.INSTAGRAM_APP_ID,
            client_secret: process.env.INSTAGRAM_APP_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: `${appUrl}/api/instagram-callback`,
            code,
        });
        const shortRes = await fetch('https://graph.facebook.com/v19.0/oauth/access_token', {
            method: 'POST',
            body: tokenBody,
        });
        const shortData = await shortRes.json();
        if (shortData.error) throw new Error(shortData.error.message);

        // 2. Exchange for a 60-day long-lived token
        const longRes = await fetch(
            `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token` +
            `&client_id=${process.env.INSTAGRAM_APP_ID}` +
            `&client_secret=${process.env.INSTAGRAM_APP_SECRET}` +
            `&fb_exchange_token=${shortData.access_token}`
        );
        const longData = await longRes.json();
        const accessToken = longData.access_token || shortData.access_token;
        const expiresIn = longData.expires_in || 5183944; // ~60 days

        // 3. Get Instagram Business Account linked to the Page
        const accountsRes = await fetch(
            `https://graph.facebook.com/v19.0/me/accounts?access_token=${accessToken}`
        );
        const accountsData = await accountsRes.json();
        const page = accountsData.data?.[0];
        let igUserId = null, igUsername = null, igFollowers = null;

        if (page) {
            const igRes = await fetch(
                `https://graph.facebook.com/v19.0/${page.id}?fields=instagram_business_account&access_token=${page.access_token}`
            );
            const igData = await igRes.json();
            igUserId = igData.instagram_business_account?.id;
            if (igUserId) {
                const profileRes = await fetch(
                    `https://graph.facebook.com/v19.0/${igUserId}?fields=username,followers_count&access_token=${page.access_token}`
                );
                const profileData = await profileRes.json();
                igUsername = profileData.username;
                igFollowers = profileData.followers_count;
            }
        }

        // 4. Store in Firestore
        const db = getDb();
        await db.collection('users').doc(uid).collection('tokens').doc('instagram').set({
            accessToken,
            expiresAt: Date.now() + expiresIn * 1000,
            userId: igUserId || null,
            username: igUsername || null,
            followersCount: igFollowers || null,
            connected: true,
            connectedAt: new Date().toISOString(),
        });

        await db.collection('users').doc(uid).update({
            'platforms.instagram': true,
            updatedAt: new Date(),
        });

        res.redirect(`${appUrl}/dashboard.html?connected=instagram`);
    } catch (err) {
        console.error('Instagram callback error:', err);
        res.redirect(`${appUrl}/dashboard.html?error=instagram_failed`);
    }
}
