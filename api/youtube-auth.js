// api/youtube-auth.js
// Redirects the user to Google's OAuth 2.0 consent screen requesting YouTube scopes.
// Called by the frontend as: /api/youtube-auth?uid=FIREBASE_UID&origin=https://yoursite.vercel.app
//
// REDIRECT URI STRATEGY:
// We derive the redirect URI from the request origin passed by the frontend,
// so it always matches the URL the user is actually browsing from — no env var mismatch.

export default function handler(req, res) {
    const { uid, origin } = req.query;
    if (!uid) return res.status(400).send('Missing uid parameter');

    // Derive base URL: use origin from frontend, or fall back to request headers
    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const appUrl = origin || process.env.APP_URL || `${proto}://${host}`;

    const redirectUri = `${appUrl}/api/youtube-callback`;

    // Embed both uid and appUrl in state so the callback can recover it
    const state = JSON.stringify({ uid, appUrl });

    const params = new URLSearchParams({
        client_id: process.env.YOUTUBE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: [
            'https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/yt-analytics.readonly',
        ].join(' '),
        access_type: 'offline',
        prompt: 'consent',
        state: Buffer.from(state).toString('base64'),
    });

    res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
}
