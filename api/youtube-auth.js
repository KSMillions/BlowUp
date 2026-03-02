// api/youtube-auth.js
// Redirects the user to Google's OAuth 2.0 consent screen requesting YouTube scopes.
// Called by the frontend as: /api/youtube-auth?uid=FIREBASE_UID

export default function handler(req, res) {
    const { uid } = req.query;
    if (!uid) return res.status(400).send('Missing uid parameter');

    // APP_URL is preferred — must match exactly what's in Google Cloud Console authorized redirect URIs
    const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;

    const params = new URLSearchParams({
        client_id: process.env.YOUTUBE_CLIENT_ID,
        redirect_uri: `${appUrl}/api/youtube-callback`,
        response_type: 'code',
        scope: [
            'https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/yt-analytics.readonly',
        ].join(' '),
        access_type: 'offline',
        prompt: 'consent',
        state: uid,
    });

    res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
}
