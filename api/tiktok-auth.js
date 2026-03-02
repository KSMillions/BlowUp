// api/tiktok-auth.js
// Redirects the user to TikTok's OAuth 2.0 consent screen.
// Called by the frontend as: /api/tiktok-auth?uid=FIREBASE_UID

import crypto from 'crypto';

export default function handler(req, res) {
    const { uid } = req.query;
    if (!uid) return res.status(400).send('Missing uid parameter');

    const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;

    // TikTok requires a CSRF state token — encode uid in it
    const csrfState = Buffer.from(JSON.stringify({ uid, rand: crypto.randomBytes(8).toString('hex') })).toString('base64url');

    const params = new URLSearchParams({
        client_key: process.env.TIKTOK_CLIENT_KEY,
        redirect_uri: `${appUrl}/api/tiktok-callback`,
        response_type: 'code',
        scope: 'user.info.basic,video.list',
        state: csrfState,
    });

    res.redirect(`https://www.tiktok.com/v2/auth/authorize/?${params}`);
}
