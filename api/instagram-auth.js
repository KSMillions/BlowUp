// api/instagram-auth.js
// Redirects the user to Facebook/Instagram OAuth consent screen.
// Called by the frontend as: /api/instagram-auth?uid=FIREBASE_UID

export default function handler(req, res) {
    const { uid } = req.query;
    if (!uid) return res.status(400).send('Missing uid parameter');

    const appUrl = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;
    const params = new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID,
        redirect_uri: `${appUrl}/api/instagram-callback`,
        scope: 'instagram_basic,instagram_manage_insights,pages_show_list,pages_read_engagement',
        response_type: 'code',
        state: uid,
    });

    res.redirect(`https://www.facebook.com/v19.0/dialog/oauth?${params}`);
}
