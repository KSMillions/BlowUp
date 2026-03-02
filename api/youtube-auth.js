// api/youtube-auth.js
// Redirects the user to Google's OAuth 2.0 consent screen requesting YouTube scopes.
// Called by the frontend as: /api/youtube-auth?uid=FIREBASE_UID

export default function handler(req, res) {
    const { uid } = req.query;
    if (!uid) return res.status(400).send('Missing uid parameter');

    const params = new URLSearchParams({
        client_id: process.env.YOUTUBE_CLIENT_ID,
        redirect_uri: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.APP_URL}/api/youtube-callback`,
        response_type: 'code',
        scope: [
            'https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/yt-analytics.readonly',
        ].join(' '),
        access_type: 'offline',   // gets refresh token
        prompt: 'consent',        // always show consent (needed to get refresh_token)
        state: uid,               // pass uid through OAuth state param
    });

    res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
}
