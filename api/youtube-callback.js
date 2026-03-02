// api/youtube-callback.js
// Google redirects here after user approves the OAuth consent screen.
// Exchanges the code for tokens, fetches channel info, stores in Firestore.

import { getDb } from './_firebase.js';

export default async function handler(req, res) {
    const { code, state: uid, error } = req.query;
    const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;

    if (error) return res.redirect(`${appUrl}/dashboard.html?error=youtube_denied`);
    if (!code || !uid) return res.status(400).send('Missing code or uid');

    try {
        // 1. Exchange auth code for tokens
        const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: process.env.YOUTUBE_CLIENT_ID,
                client_secret: process.env.YOUTUBE_CLIENT_SECRET,
                redirect_uri: `${appUrl}/api/youtube-callback`,
                grant_type: 'authorization_code',
            }),
        });
        const tokens = await tokenRes.json();
        if (tokens.error) throw new Error(tokens.error_description || tokens.error);

        // 2. Fetch YouTube channel info
        const channelRes = await fetch(
            'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',
            { headers: { Authorization: `Bearer ${tokens.access_token}` } }
        );
        const channelData = await channelRes.json();
        const channel = channelData.items?.[0];

        // 3. Store in Firestore users/{uid}/tokens/youtube
        const db = getDb();
        await db.collection('users').doc(uid).collection('tokens').doc('youtube').set({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token || null,
            expiresAt: Date.now() + (tokens.expires_in || 3600) * 1000,
            channelId: channel?.id || null,
            channelName: channel?.snippet?.title || null,
            channelHandle: channel?.snippet?.customUrl || null,
            subscriberCount: channel?.statistics?.subscriberCount || null,
            viewCount: channel?.statistics?.viewCount || null,
            videoCount: channel?.statistics?.videoCount || null,
            connected: true,
            connectedAt: new Date().toISOString(),
        });

        // 4. Update platforms flag on the user's main document
        await db.collection('users').doc(uid).update({
            'platforms.youtube': true,
            updatedAt: new Date(),
        });

        res.redirect(`${appUrl}/dashboard.html?connected=youtube`);
    } catch (err) {
        console.error('YouTube callback error:', err);
        res.redirect(`${appUrl}/dashboard.html?error=youtube_failed`);
    }
}
