// api/tiktok-callback.js
// TikTok redirects here after user approves.
// Exchanges code for tokens, fetches user profile, stores in Firestore.

import { getDb } from './_firebase.js';

export default async function handler(req, res) {
    const { code, state, error } = req.query;
    const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;

    if (error) return res.redirect(`${appUrl}/dashboard.html?error=tiktok_denied`);
    if (!code || !state) return res.status(400).send('Missing code or state');

    let uid;
    try {
        uid = JSON.parse(Buffer.from(state, 'base64url').toString()).uid;
    } catch {
        return res.status(400).send('Invalid state parameter');
    }

    try {
        // 1. Exchange code for access token
        const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
            },
            body: new URLSearchParams({
                client_key: process.env.TIKTOK_CLIENT_KEY,
                client_secret: process.env.TIKTOK_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code,
                redirect_uri: `${appUrl}/api/tiktok-callback`,
            }),
        });
        const tokenData = await tokenRes.json();
        if (tokenData.error) throw new Error(tokenData.error_description || tokenData.error);

        const { access_token, refresh_token, expires_in, open_id } = tokenData;

        // 2. Fetch TikTok user profile
        const profileRes = await fetch(
            'https://open.tiktokapis.com/v2/user/info/?fields=display_name,follower_count,following_count,likes_count,video_count',
            { headers: { Authorization: `Bearer ${access_token}` } }
        );
        const profileData = await profileRes.json();
        const user = profileData.data?.user;

        // 3. Store in Firestore
        const db = getDb();
        await db.collection('users').doc(uid).collection('tokens').doc('tiktok').set({
            accessToken: access_token,
            refreshToken: refresh_token || null,
            expiresAt: Date.now() + (expires_in || 86400) * 1000,
            openId: open_id,
            displayName: user?.display_name || null,
            followerCount: user?.follower_count || null,
            followingCount: user?.following_count || null,
            likesCount: user?.likes_count || null,
            videoCount: user?.video_count || null,
            connected: true,
            connectedAt: new Date().toISOString(),
        });

        await db.collection('users').doc(uid).update({
            'platforms.tiktok': true,
            updatedAt: new Date(),
        });

        res.redirect(`${appUrl}/dashboard.html?connected=tiktok`);
    } catch (err) {
        console.error('TikTok callback error:', err);
        res.redirect(`${appUrl}/dashboard.html?error=tiktok_failed`);
    }
}
