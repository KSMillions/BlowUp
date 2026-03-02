// ===== GHOST SOFTWARE DASHBOARD — Main App Logic =====

// ===== MOCK DATA =====
const channelData = {
    name: "Ghost Hlubi",
    handle: "@GhostHlubi",
    subscribers: 1294715,
    totalViews: 182400000,
    watchTime: 4800000,
    revenue: 284000,
    videosCount: 458,
    instagram: { followers: 1400000, engRate: 3.2, posts: 865, handle: "@ghost.hlubi", url: "https://www.instagram.com/ghost.hlubi" },
    tiktok: { followers: 2200000, engRate: 4.8, likes: 75500000, handle: "@almightyghosthlubi", url: "https://www.tiktok.com/@almightyghosthlubi" }
};

const subscriberGrowth = [
    { month: "Mar", value: 620000 },
    { month: "Apr", value: 680000 },
    { month: "May", value: 740000 },
    { month: "Jun", value: 790000 },
    { month: "Jul", value: 850000 },
    { month: "Aug", value: 920000 },
    { month: "Sep", value: 980000 },
    { month: "Oct", value: 1040000 },
    { month: "Nov", value: 1100000 },
    { month: "Dec", value: 1150000 },
    { month: "Jan", value: 1220000 },
    { month: "Feb", value: 1294715 }
];

const topVideos = [
    { title: "I Bought a Lamborghini Urus 🔥", category: "Cars", views: 4200000, likes: 285000, comments: 18400, ctr: 12.4, status: "top", url: "https://www.youtube.com/watch?v=kG2xJCY3Rjs" },
    { title: "Pranking My Girlfriend For 24 Hours!", category: "Pranks", views: 3800000, likes: 245000, comments: 22100, ctr: 11.8, status: "top", url: "https://www.youtube.com/watch?v=wFZHUe1XfGY" },
    { title: "BMW M4 Accident — Full Story", category: "Cars", views: 3500000, likes: 198000, comments: 31200, ctr: 14.2, status: "top", url: "https://www.youtube.com/watch?v=o6CJi03aMDU" },
    { title: "Ola Sbali Challenge ft. Peanuts", category: "Pranks", views: 2900000, likes: 172000, comments: 15600, ctr: 9.8, status: "top", url: "https://www.youtube.com/shorts/h7GIhHjO32A" },
    { title: "Surprising Gugu With Dream Date ❤️", category: "Vlogs", views: 2600000, likes: 210000, comments: 12800, ctr: 8.5, status: "top", url: "https://www.youtube.com/watch?v=Mfv5N7J_5qc" },
    { title: "New Lamborghini Reveal! 🏎️", category: "Cars", views: 2400000, likes: 165000, comments: 14200, ctr: 10.1, status: "top", url: "https://www.youtube.com/shorts/xAxS-IETl_U" },
    { title: "Mark Zuckerberg Challenge Gone Wrong", category: "Pranks", views: 2200000, likes: 148000, comments: 16800, ctr: 7.9, status: "mid", url: "https://www.youtube.com/shorts/F5kyFZLGid8" },
    { title: "Day In My Life — Johannesburg", category: "Vlogs", views: 1800000, likes: 132000, comments: 8900, ctr: 6.4, status: "mid", url: "https://www.youtube.com/watch?v=Qq1EZAHHYjk" },
    { title: "Picking Up Friends In a Lambo", category: "Cars", views: 1650000, likes: 118000, comments: 7600, ctr: 7.2, status: "mid", url: "https://www.youtube.com/watch?v=rjRZE2lzEdc" },
    { title: "Calling My Girlfriend By Ex's Name PRANK", category: "Pranks", views: 1500000, likes: 105000, comments: 19200, ctr: 8.8, status: "mid", url: "https://www.youtube.com/watch?v=eXtwcc7dxfs" },
    { title: "GalXBoy Shopping Haul 🛍️", category: "Vlogs", views: 1200000, likes: 89000, comments: 5400, ctr: 5.1, status: "mid", url: "https://www.youtube.com/watch?v=PZX26gn1XUQ" },
    { title: "Road Trip to Cape Town!", category: "Vlogs", views: 980000, likes: 72000, comments: 4800, ctr: 4.8, status: "mid", url: "https://www.youtube.com/@GhostHlubi/videos" },
    { title: "Testing Cheap vs Expensive Sneakers", category: "Vlogs", views: 750000, likes: 54000, comments: 3200, ctr: 4.2, status: "low", url: "https://www.youtube.com/@GhostHlubi/videos" },
    { title: "Morning Routine 2025", category: "Vlogs", views: 620000, likes: 41000, comments: 2100, ctr: 3.5, status: "low", url: "https://www.youtube.com/@GhostHlubi/videos" },
    { title: "Q&A — Answering Your Questions", category: "Vlogs", views: 480000, likes: 32000, comments: 5600, ctr: 3.1, status: "low", url: "https://www.youtube.com/@GhostHlubi/videos" },
];

const videoIdeas = [
    { category: "pranks", title: "Fake Breaking Up With Gugu PRANK", desc: "An emotional prank telling Gugu you want to break up — film her genuine reaction before revealing it's a prank. High engagement potential.", views: "2-4M", engagement: "Very High" },
    { category: "pranks", title: "Switching Lives With Peanuts for 24 Hours", desc: "You and Peanuts swap lifestyles for a full day. Your audience loves duo content.", views: "1.5-3M", engagement: "High" },
    { category: "cars", title: "R1 Million Supercar Challenge", desc: "Compare 3 supercars under R1M — race them, review them, pick a winner. Cars + competition = viral.", views: "3-5M", engagement: "Very High" },
    { category: "cars", title: "Teaching Gugu To Drive Stick in the Lambo", desc: "Comedy + cars + relationship content. Triple threat combo for your audience.", views: "2-3M", engagement: "High" },
    { category: "vlogs", title: "Living on R100 for 48 Hours in Johannesburg", desc: "Budget challenge vlog showing a different side of your lifestyle. Great for relatability.", views: "1.5-2.5M", engagement: "High" },
    { category: "vlogs", title: "Surprising A Fan With Their Dream Car", desc: "Emotional, shareable content that builds community loyalty and tends to go viral.", views: "3-6M", engagement: "Very High" },
    { category: "trending", title: "I Let AI Plan My Entire Day", desc: "Trending AI content — let ChatGPT or Gemini decide everything you do for 24 hours.", views: "2-4M", engagement: "Very High" },
    { category: "trending", title: "SA vs UK YouTube Challenge ft. UK Creator", desc: "Collaboration with a UK creator comparing SA and UK lifestyles. Cross-audience growth.", views: "2-5M", engagement: "High" },
    { category: "pranks", title: "Invisible Prank on Gugu — She Can't See Me", desc: "Classic viral prank format where you pretend to be invisible. Always hits.", views: "2-3.5M", engagement: "High" },
    { category: "cars", title: "I Bought the Cheapest Supercar in South Africa", desc: "Affordable dream car content — inspirational and educational.", views: "2-4M", engagement: "High" },
];

const trendingTopics = [
    { topic: "AI-powered content", volume: "12.4K searches", heat: "🔥" },
    { topic: "South African luxury lifestyle", volume: "8.9K searches", heat: "🔥" },
    { topic: "Couple prank videos", volume: "22.1K searches", heat: "🔥" },
    { topic: "Supercar reviews 2025", volume: "15.3K searches", heat: "⚡" },
    { topic: "24-hour challenges", volume: "18.7K searches", heat: "⚡" },
    { topic: "Budget vs luxury", volume: "9.6K searches", heat: "✨" },
    { topic: "Fan surprise videos", volume: "11.2K searches", heat: "✨" },
];

const aiResponses = {
    "What's my best performing video?": `Great question! 🏆 Your **best performing video** is:\n\n**"I Bought a Lamborghini Urus 🔥"**\n- 4.2M views\n- 285K likes\n- 12.4% CTR\n- 18.4K comments\n\nThis video outperforms your average by **340%**! The car reveal format combined with luxury lifestyle content is your strongest category. I'd recommend doing more "new car reveal" style videos — they consistently hit 2M+ for you.`,

    "Give me 5 new video ideas": `Here are 5 video ideas tailored to your audience:\n\n1. 🚗 **"R1 Million Supercar Challenge"** — Compare 3 supercars, race them. Est. 3-5M views.\n\n2. 😂 **"Fake Breaking Up With Gugu PRANK"** — High emotion = high engagement. Est. 2-4M views.\n\n3. 🤖 **"I Let AI Plan My Entire Day"** — Trending format, perfect for your style. Est. 2-4M views.\n\n4. ❤️ **"Surprising A Fan With Their Dream Car"** — Emotional shareable content. Est. 3-6M views.\n\n5. 🌍 **"SA vs UK YouTube Challenge"** — Collab for cross-audience growth. Est. 2-5M views.\n\nWant me to create a full script outline for any of these?`,

    "How can I grow faster?": `Based on your analytics, here's my growth strategy:\n\n📊 **Current Growth Rate:** +12.4% monthly\n\n**3 Quick Wins:**\n1. **Post more Shorts** — Your Shorts get 2x the engagement rate. Aim for 5/week minimum.\n2. **Collaborate with international creators** — Your audience loves when you interact with people from other countries.\n3. **Car + Prank combos** — Your top 3 videos combine these categories. Double down!\n\n**Long-term:**\n- Build a second upload day (Tue + Sat schedule)\n- Create a "series" format (weekly recurring segment)\n- Expand to TikTok — your content is perfectly suited and you're underweight there (523K vs 1.29M on YT)\n\nAt current trajectory, you'll hit **2M subscribers** by August 2026! 🚀`,

    "Analyze my content mix": `📊 **Content Mix Analysis:**\n\n| Category | Videos | Avg Views | Performance |\n|----------|--------|-----------|-------------|\n| Pranks | 38% | 2.4M | ⭐⭐⭐⭐⭐ |\n| Cars | 28% | 2.6M | ⭐⭐⭐⭐⭐ |\n| Vlogs | 24% | 1.1M | ⭐⭐⭐ |\n| Shorts | 10% | 800K | ⭐⭐⭐⭐ |\n\n**Key Insights:**\n- 🚗 **Cars** have your highest avg views but you make them less often\n- 😂 **Pranks** are your most consistent performer\n- 📹 **Vlogs** underperform — consider making them Shorts instead\n- ⚡ **Shorts** have the highest engagement rate per view\n\n**Recommendation:** Shift to 35% Pranks, 30% Cars, 15% Vlogs, 20% Shorts for optimal growth.`,
};

// ===== CHART CONFIG DEFAULTS =====
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#a0a0a0';
Chart.defaults.plugins.legend.display = false;
Chart.defaults.elements.point.radius = 0;
Chart.defaults.elements.point.hoverRadius = 6;

const gridColor = 'rgba(255,255,255,0.04)';
const greenColor = '#8AE65C';
const greenGlow = 'rgba(138, 230, 92, 0.15)';
const orangeColor = '#F5A623';
const orangeGlow = 'rgba(245, 166, 35, 0.15)';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // ===== FIRESTORE PROFILE =====
    const db = firebase.firestore();

    function applyProfile(profile) {
        const name = profile.displayName || 'Creator';
        const plan = (profile.plan || 'free').toUpperCase();
        const parts = name.trim().split(' ');
        const initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
        // Derive a handle: use email prefix or name slugified
        const user = firebase.auth().currentUser;
        const handle = user?.email ? '@' + user.email.split('@')[0] : '@' + name.toLowerCase().replace(/\s+/g, '');

        // Topbar
        const nameEl = document.querySelector('.profile-name');
        const initialsEl = document.getElementById('avatarInitials');
        const planBadgeEl = document.getElementById('planBadge');
        const handleEl = document.getElementById('profileHandle');
        if (nameEl) nameEl.textContent = name;
        if (initialsEl) initialsEl.textContent = initials;
        if (handleEl) handleEl.textContent = handle;
        if (planBadgeEl) {
            planBadgeEl.textContent = plan;
            planBadgeEl.className = 'plan-badge plan-' + profile.plan;
        }

        // Chatbot greeting
        const greetEl = document.getElementById('chatGreeting');
        if (greetEl) greetEl.textContent = `Hey ${parts[0]}!`;

        // Settings drawer
        const settingsAvatar = document.getElementById('settingsAvatar');
        const settingsAvatarName = document.getElementById('settingsAvatarName');
        const settingsAvatarEmail = document.getElementById('settingsAvatarEmail');
        const settingsDisplayName = document.getElementById('settingsDisplayName');
        const settingsEmail = document.getElementById('settingsEmail');
        const settingsPlanBadge = document.getElementById('settingsPlanBadge');
        const settingsPlanDesc = document.getElementById('settingsPlanDesc');
        if (settingsAvatar) settingsAvatar.textContent = initials;
        if (settingsAvatarName) settingsAvatarName.textContent = name;
        if (settingsAvatarEmail) settingsAvatarEmail.textContent = profile.email || '';
        if (settingsDisplayName) settingsDisplayName.value = name;
        if (settingsEmail) settingsEmail.value = profile.email || '';
        if (settingsPlanBadge) settingsPlanBadge.textContent = plan;
        if (settingsPlanDesc) {
            const descs = {
                free: 'Access to 1 YouTube channel & basic analytics',
                pro: 'Full access — YouTube, Instagram & TikTok + AI Studio',
                agency: 'Up to 10 creators, white-label reports & API access'
            };
            settingsPlanDesc.textContent = descs[profile.plan] || descs.free;
        }
    }

    // Read profile from Firestore on auth state change
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Expose uid globally so connect buttons and URL-paste can use it
            window._blowupUid = user.uid;
            window._blowupDb = db;

            db.collection('users').doc(user.uid).get().then(snap => {
                if (snap.exists) {
                    applyProfile(snap.data());
                } else {
                    applyProfile({
                        displayName: user.displayName || user.email.split('@')[0],
                        email: user.email,
                        plan: 'free'
                    });
                }
            }).catch(() => {
                applyProfile({
                    displayName: user.displayName || user.email.split('@')[0],
                    email: user.email,
                    plan: 'free'
                });
            });
        }
    });

    // ===== LOGOUT =====
    const doSignOut = () => firebase.auth().signOut().then(() => { window.location.href = 'auth.html'; });
    const logoutBtn = document.getElementById('logoutBtn');
    const settingsLogoutBtn = document.getElementById('settingsLogoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', doSignOut);
    if (settingsLogoutBtn) settingsLogoutBtn.addEventListener('click', doSignOut);

    // ===== SETTINGS DRAWER =====
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDrawer = document.getElementById('settingsDrawer');
    const settingsClose = document.getElementById('settingsClose');
    const settingsOverlay = document.getElementById('settingsOverlay');

    function openSettings() {
        settingsDrawer.classList.add('open');
        settingsOverlay.classList.add('open');
    }
    function closeSettings() {
        settingsDrawer.classList.remove('open');
        settingsOverlay.classList.remove('open');
    }
    if (settingsBtn) settingsBtn.addEventListener('click', openSettings);
    if (settingsClose) settingsClose.addEventListener('click', closeSettings);
    if (settingsOverlay) settingsOverlay.addEventListener('click', closeSettings);

    // Save profile changes
    const settingsSaveBtn = document.getElementById('settingsSaveBtn');
    const settingsSaveMsg = document.getElementById('settingsSaveMsg');
    if (settingsSaveBtn) {
        settingsSaveBtn.addEventListener('click', async () => {
            const user = firebase.auth().currentUser;
            if (!user) return;
            const newName = document.getElementById('settingsDisplayName').value.trim();
            if (!newName) return;
            settingsSaveBtn.disabled = true;
            settingsSaveBtn.textContent = 'Saving...';
            try {
                await db.collection('users').doc(user.uid).update({
                    displayName: newName,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                await user.updateProfile({ displayName: newName });
                const snap = await db.collection('users').doc(user.uid).get();
                if (snap.exists) applyProfile(snap.data());
                settingsSaveMsg.textContent = '✓ Saved successfully';
                settingsSaveMsg.style.color = '#39FF14';
            } catch (err) {
                settingsSaveMsg.textContent = '✗ Failed to save. Try again.';
                settingsSaveMsg.style.color = '#FF4D4D';
            }
            settingsSaveBtn.disabled = false;
            settingsSaveBtn.textContent = 'Save Changes';
            setTimeout(() => { settingsSaveMsg.textContent = ''; }, 3000);
        });
    }

    initNavigation();
    initSparklines();
    initSubscriberChart();
    initCategoryChart();
    initTopVideos();
    initVideoTable();
    initVideoPerformanceChart();
    initSocialMiniCharts();
    initCrossPlatformChart();
    initAIStudio();
    initChatbox();
    initAnimations();
    initPlatformBars();

    if (window.lucide) lucide.createIcons();

    // Social connections init — waits for auth
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            initSocialConnections(user.uid, db);
            initUrlPasteConnections(user.uid, db);
        }
    });
});

// ===== YOUTUBE CONNECT — robust global function =====
// Called from connect button click via event listener OR directly
window.connectYouTube = function () {
    const uid = window._blowupUid;
    if (!uid) { alert('Please wait — loading your account...'); return; }
    window.location.href = `/api/youtube-auth?uid=${uid}`;
};

// ===== INSTAGRAM + TIKTOK URL PASTE =====
function initUrlPasteConnections(uid, db) {
    function extractHandle(url, platform) {
        try {
            const u = new URL(url.trim());
            let path = u.pathname.replace(/\/$/, '').split('/').filter(Boolean);
            if (platform === 'instagram') return path[0] ? '@' + path[0].replace('@', '') : null;
            if (platform === 'tiktok') return path[0] ? '@' + path[0].replace('@', '') : null;
        } catch { return null; }
    }

    function setupPlatform(platform) {
        const prefix = platform === 'instagram' ? 'ig' : 'tt';
        const input = document.getElementById(`${prefix}-url-input`);
        const saveBtn = document.getElementById(`${prefix}-save-btn`);
        const urlGroup = document.getElementById(`${prefix}-url-group`);
        const connectedBar = document.getElementById(`${prefix}-connected-bar`);
        const connectedLabel = document.getElementById(`${prefix}-connected-label`);
        const removeBtn = document.getElementById(`${prefix}-remove-btn`);
        const statusEl = document.getElementById(`${prefix}-status`);
        const nameEl = document.getElementById(prefix === 'ig' ? 'ig-username' : 'tt-displayname');

        function showConnected(handle) {
            if (urlGroup) urlGroup.style.display = 'none';
            if (connectedBar) connectedBar.style.display = 'flex';
            if (connectedLabel) connectedLabel.textContent = handle;
            if (statusEl) {
                statusEl.className = 'social-status connected';
                statusEl.innerHTML = '<i data-lucide="check-circle" style="width:14px;height:14px"></i> Connected';
            }
            if (nameEl) nameEl.textContent = handle;
            if (window.lucide) lucide.createIcons();
        }

        function showDisconnected() {
            if (urlGroup) urlGroup.style.display = 'flex';
            if (connectedBar) connectedBar.style.display = 'none';
            if (statusEl) {
                statusEl.className = 'social-status';
                statusEl.innerHTML = '<i data-lucide="link-2" style="width:14px;height:14px"></i> Not Connected';
            }
            if (window.lucide) lucide.createIcons();
        }

        // Load saved handle from Firestore
        db.collection('users').doc(uid).get().then(snap => {
            const field = platform === 'instagram' ? 'instagramHandle' : 'tiktokHandle';
            const handle = snap.exists && snap.data()[field];
            if (handle) showConnected(handle);
            else showDisconnected();
        });

        // Save button
        if (saveBtn) {
            saveBtn.addEventListener('click', async () => {
                const url = input?.value?.trim();
                if (!url) return;
                const handle = extractHandle(url, platform);
                if (!handle) {
                    input.style.borderColor = '#FF4D4D';
                    setTimeout(() => { input.style.borderColor = ''; }, 2000);
                    return;
                }
                saveBtn.textContent = 'Saving...';
                saveBtn.disabled = true;
                const field = platform === 'instagram' ? 'instagramHandle' : 'tiktokHandle';
                const urlField = platform === 'instagram' ? 'instagramUrl' : 'tiktokUrl';
                await db.collection('users').doc(uid).update({
                    [field]: handle,
                    [urlField]: url,
                    [`platforms.${platform}`]: true,
                    updatedAt: new Date()
                });
                showConnected(handle);
                saveBtn.textContent = 'Save';
                saveBtn.disabled = false;
            });
        }

        // Remove button
        if (removeBtn) {
            removeBtn.addEventListener('click', async () => {
                const field = platform === 'instagram' ? 'instagramHandle' : 'tiktokHandle';
                const urlField = platform === 'instagram' ? 'instagramUrl' : 'tiktokUrl';
                await db.collection('users').doc(uid).update({
                    [field]: firebase.firestore.FieldValue.delete(),
                    [urlField]: firebase.firestore.FieldValue.delete(),
                    [`platforms.${platform}`]: false,
                    updatedAt: new Date()
                });
                if (input) input.value = '';
                showDisconnected();
            });
        }
    }

    setupPlatform('instagram');
    setupPlatform('tiktok');
}



// ===== SOCIAL PLATFORM CONNECTIONS =====
function initSocialConnections(uid, db) {
    // Helper: format large numbers (1290000 -> 1.29M)
    function fmt(n) {
        if (!n) return '—';
        n = Number(n);
        if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
        if (n >= 1e6) return (n / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
        if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
        return n.toLocaleString();
    }

    // Show toast for OAuth redirect result
    const params = new URLSearchParams(window.location.search);
    const connected = params.get('connected');
    const oauthError = params.get('error');
    const toast = document.getElementById('connectToast');
    if (toast && (connected || oauthError)) {
        const names = { youtube: 'YouTube', instagram: 'Instagram', tiktok: 'TikTok' };
        if (connected) {
            toast.textContent = `✓ ${names[connected] || connected} connected successfully!`;
            toast.style.cssText = 'display:flex;background:rgba(57,255,20,0.12);border:1px solid rgba(57,255,20,0.3);color:#39FF14;border-radius:12px;padding:14px 20px;margin-bottom:20px;font-weight:600;';
        } else {
            const plat = oauthError.replace('_denied', '').replace('_failed', '');
            toast.textContent = oauthError.includes('denied')
                ? `Connection cancelled for ${names[plat] || plat}.`
                : `Failed to connect ${names[plat] || plat}. Try again.`;
            toast.style.cssText = 'display:flex;background:rgba(255,77,77,0.1);border:1px solid rgba(255,77,77,0.3);color:#FF4D4D;border-radius:12px;padding:14px 20px;margin-bottom:20px;font-weight:600;';
        }
        // Remove param from URL without reload
        window.history.replaceState({}, '', window.location.pathname);
        setTimeout(() => { if (toast) toast.style.display = 'none'; }, 5000);
    }

    // Wire connect buttons — navigate to /api/{platform}-auth?uid=...
    document.querySelectorAll('.connect-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.platform;
            if (!platform) return;
            if (btn.dataset.connected === 'true') {
                // Disconnect: remove token doc and update platform flag
                if (!confirm(`Disconnect ${platform}? Your data will be removed.`)) return;
                db.collection('users').doc(uid).collection('tokens').doc(platform).delete();
                db.collection('users').doc(uid).update({ [`platforms.${platform}`]: false });
                setCardDisconnected(platform);
            } else {
                if (platform === 'youtube') {
                    window.connectYouTube();
                } else {
                    window.location.href = `/api/${platform}-auth?uid=${uid}`;
                }
            }
        });
    });

    // Read all three token docs in parallel
    const platforms = ['youtube', 'instagram', 'tiktok'];
    platforms.forEach(async (platform) => {
        try {
            const snap = await db.collection('users').doc(uid).collection('tokens').doc(platform).get();
            if (snap.exists && snap.data().connected) {
                setCardConnected(platform, snap.data());
            } else {
                setCardDisconnected(platform);
            }
        } catch (e) {
            setCardDisconnected(platform);
        }
    });

    function setCardConnected(platform, data) {
        const statusEl = document.getElementById(`${platformPrefix(platform)}-status`);
        const btn = document.getElementById(`${platformPrefix(platform)}-btn`);
        if (statusEl) {
            statusEl.className = 'social-status connected';
            statusEl.innerHTML = '<i data-lucide="check-circle" style="width:14px;height:14px"></i> Connected';
        }
        if (btn) {
            btn.textContent = 'Disconnect';
            btn.classList.remove('connect-btn');
            btn.classList.add('connect-btn', 'connected-btn');
            btn.dataset.connected = 'true';
            btn.dataset.platform = platform;
        }
        if (window.lucide) lucide.createIcons();

        // Populate stats based on platform
        if (platform === 'youtube') {
            setText('yt-channel-name', data.channelName || 'YouTube');
            setText('yt-subscribers', fmt(data.subscriberCount));
            setText('yt-views', fmt(data.viewCount));
            setText('yt-videos', fmt(data.videoCount));
            // Update Channel filter label
            const chanOpt = document.getElementById('channelFilterMain');
            if (chanOpt && data.channelName) chanOpt.textContent = data.channelName;
            // Populate overview KPI cards
            updateOverviewKPIs(data);
        } else if (platform === 'instagram') {
            setText('ig-username', data.username ? `@${data.username}` : 'Instagram');
            setText('ig-followers', fmt(data.followersCount));
        } else if (platform === 'tiktok') {
            setText('tt-displayname', data.displayName ? `@${data.displayName}` : 'TikTok');
            setText('tt-followers', fmt(data.followerCount));
            setText('tt-likes', fmt(data.likesCount));
            setText('tt-videos', fmt(data.videoCount));
        }
    }

    function updateOverviewKPIs(ytData) {
        // Hide the connect prompt, show the grid
        const prompt = document.getElementById('overviewConnectPrompt');
        const grid = document.getElementById('overviewGrid');
        if (prompt) prompt.style.display = 'none';
        if (grid) grid.style.display = '';

        // Subscribers
        setText('kpi-subs-value', fmt(ytData.subscriberCount));
        setText('kpi-subs-sub', ytData.channelName || 'YouTube Channel');

        // Views
        setText('kpi-views-value', fmt(ytData.viewCount));
        setText('kpi-views-sub', 'Total lifetime views');

        // Videos (was "watch time" — now shows video count since that's what we store)
        setText('kpi-videos-value', fmt(ytData.videoCount));
        setText('kpi-videos-sub', 'Videos published');

        // Revenue estimate: rough CPM of ~R25 per 1000 views
        if (ytData.viewCount) {
            const estRevenue = Math.round((Number(ytData.viewCount) / 1000) * 25);
            const revFmt = estRevenue >= 1e6 ? (estRevenue / 1e6).toFixed(1) + 'M'
                : estRevenue >= 1e3 ? (estRevenue / 1e3).toFixed(0) + 'K'
                    : estRevenue.toString();
            setText('kpi-rev-value', `R ${revFmt}`);
            setText('kpi-rev-sub', 'Est. lifetime (R25 CPM)');
        }
    }

    function showConnectPrompt() {
        const prompt = document.getElementById('overviewConnectPrompt');
        const grid = document.getElementById('overviewGrid');
        if (prompt) prompt.style.display = 'flex';
        if (grid) grid.style.opacity = '0.35';
    }



    function setCardDisconnected(platform) {
        const prefix = platformPrefix(platform);
        const statusEl = document.getElementById(`${prefix}-status`);
        const btn = document.getElementById(`${prefix}-btn`);
        if (statusEl) {
            statusEl.className = 'social-status';
            statusEl.innerHTML = '<i data-lucide="link-2" style="width:14px;height:14px"></i> Not Connected';
        }
        if (btn) {
            const labels = { youtube: 'Connect YouTube', instagram: 'Connect Instagram', tiktok: 'Connect TikTok' };
            btn.textContent = labels[platform] || 'Connect';
            btn.classList.remove('connected-btn');
            btn.dataset.connected = 'false';
            btn.dataset.platform = platform;
        }
        if (window.lucide) lucide.createIcons();
        // Show connect prompt on overview for unconnected YouTube
        if (platform === 'youtube') showConnectPrompt();
    }

    function platformPrefix(p) {
        return { youtube: 'yt', instagram: 'ig', tiktok: 'tt' }[p] || p;
    }
    function setText(id, val) {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    }
}



// ===== NAVIGATION =====
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn[data-page]');
    const tabBtns = document.querySelectorAll('.tab-btn[data-page]');
    const pages = document.querySelectorAll('.page');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const menuBtn = document.getElementById('mobileMenuBtn');

    function switchPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        navBtns.forEach(b => b.classList.remove('active'));
        tabBtns.forEach(b => b.classList.remove('active'));

        const target = document.getElementById('page-' + pageId);
        if (target) target.classList.add('active');

        navBtns.forEach(b => { if (b.dataset.page === pageId) b.classList.add('active'); });
        tabBtns.forEach(b => { if (b.dataset.page === pageId) b.classList.add('active'); });

        // Close mobile sidebar after navigation
        closeMobileSidebar();

        // Re-trigger animations
        setTimeout(() => {
            const cards = target.querySelectorAll('.card-animate');
            cards.forEach((c, i) => {
                c.classList.remove('visible');
                setTimeout(() => c.classList.add('visible'), i * 100);
            });
        }, 50);
    }

    function openMobileSidebar() {
        if (sidebar) sidebar.classList.add('mobile-open');
        if (overlay) {
            overlay.classList.add('active');
            overlay.style.pointerEvents = 'auto';
        }
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (sidebar) sidebar.classList.remove('mobile-open');
        if (overlay) {
            overlay.classList.remove('active');
            overlay.style.pointerEvents = 'none';
        }
        document.body.style.overflow = '';
    }

    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (sidebar && sidebar.classList.contains('mobile-open')) {
                closeMobileSidebar();
            } else {
                openMobileSidebar();
            }
        });
    }

    // Overlay click closes sidebar
    if (overlay) {
        overlay.addEventListener('click', closeMobileSidebar);
    }

    navBtns.forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.page)));
    tabBtns.forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.page)));
}

// ===== SPARKLINES =====
function initSparklines() {
    const sparkData = {
        sparkSubs: [62, 68, 74, 79, 85, 92, 98, 104, 110, 115, 122, 129],
        sparkViews: [12, 15, 13, 16, 14, 18, 15, 17, 16, 19, 15, 18],
        sparkWatch: [3.2, 3.8, 3.5, 4.1, 3.9, 4.3, 4.0, 4.5, 4.2, 4.6, 4.4, 4.8],
        sparkRevenue: [18, 22, 20, 25, 23, 28, 24, 30, 27, 32, 29, 37]
    };

    Object.entries(sparkData).forEach(([id, data]) => {
        const canvas = document.getElementById(id);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, greenGlow);
        gradient.addColorStop(1, 'transparent');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map((_, i) => i),
                datasets: [{
                    data: data,
                    borderColor: greenColor,
                    borderWidth: 2,
                    fill: true,
                    backgroundColor: gradient,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: { x: { display: false }, y: { display: false } },
                elements: { point: { radius: 0 } },
                animation: { duration: 1500, easing: 'easeOutQuart' }
            }
        });
    });
}

// ===== SUBSCRIBER GROWTH CHART =====
function initSubscriberChart() {
    const ctx = document.getElementById('subscriberChart');
    if (!ctx) return;
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
    gradient.addColorStop(0, 'rgba(138, 230, 92, 0.2)');
    gradient.addColorStop(1, 'rgba(138, 230, 92, 0)');

    const gradient2 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
    gradient2.addColorStop(0, 'rgba(245, 166, 35, 0.15)');
    gradient2.addColorStop(1, 'rgba(245, 166, 35, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: subscriberGrowth.map(d => d.month),
            datasets: [{
                label: 'Subscribers',
                data: subscriberGrowth.map(d => d.value),
                borderColor: greenColor,
                borderWidth: 2.5,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4,
                pointBackgroundColor: greenColor,
                pointBorderColor: '#1a1a1a',
                pointBorderWidth: 2,
                pointHoverRadius: 8,
            }, {
                label: 'Views (M)',
                data: [12, 15, 13, 16, 14, 18, 15, 17, 16, 19, 15, 18.2],
                borderColor: orangeColor,
                borderWidth: 2,
                fill: true,
                backgroundColor: gradient2,
                tension: 0.4,
                pointBackgroundColor: orangeColor,
                yAxisID: 'y1',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: {
                    display: true, position: 'top', align: 'end',
                    labels: { usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 11 } }
                },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    borderColor: '#2a2a2a',
                    borderWidth: 1,
                    cornerRadius: 10,
                    padding: 12,
                    titleFont: { weight: '600' },
                    callbacks: {
                        label: (ctx) => {
                            if (ctx.datasetIndex === 0) return `Subs: ${(ctx.parsed.y / 1000000).toFixed(2)}M`;
                            return `Views: ${ctx.parsed.y}M`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { color: gridColor }, ticks: { font: { size: 11 } } },
                y: {
                    grid: { color: gridColor },
                    ticks: {
                        font: { size: 11 },
                        callback: v => (v / 1000000).toFixed(1) + 'M'
                    }
                },
                y1: {
                    position: 'right',
                    grid: { display: false },
                    ticks: { font: { size: 11 }, callback: v => v + 'M' }
                }
            },
            animation: { duration: 2000, easing: 'easeOutQuart' }
        }
    });
}

// ===== CATEGORY CHART =====
function initCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    const categories = ['Pranks', 'Cars', 'Vlogs', 'Shorts', 'Collabs'];
    const counts = [174, 128, 110, 32, 14];
    const colors = [greenColor, orangeColor, '#ffffff', '#8AE65C88', '#F5A62388'];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                data: counts,
                backgroundColor: colors.map(c => c + '33'),
                borderColor: colors,
                borderWidth: 2,
                borderRadius: 20,
                barThickness: 32,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    borderColor: '#2a2a2a',
                    borderWidth: 1,
                    cornerRadius: 10,
                    padding: 12,
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 11 } } },
                y: { grid: { color: gridColor }, ticks: { font: { size: 11 } } }
            },
            animation: { duration: 1500, easing: 'easeOutQuart' }
        }
    });
}

// ===== TOP VIDEOS =====
function initTopVideos() {
    const container = document.getElementById('topVideosList');
    if (!container) return;

    const top5 = topVideos.slice(0, 5);
    const gradients = [
        'linear-gradient(135deg, #8AE65C, #5aa83a)',
        'linear-gradient(135deg, #F5A623, #c4841a)',
        'linear-gradient(135deg, #8AE65C88, #5aa83a88)',
        'linear-gradient(135deg, #F5A62388, #c4841a88)',
        'linear-gradient(135deg, #ffffff33, #a0a0a033)',
    ];

    container.innerHTML = top5.map((v, i) => `
        <div class="video-item" style="animation-delay: ${i * 0.1}s">
            <div class="video-rank ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}">${i + 1}</div>
            <div class="video-thumb">
                <div class="thumb-gradient" style="background: ${gradients[i]}"></div>
                <span class="play-icon">▶</span>
            </div>
            <div class="video-info">
                <div class="video-name"><a href="${v.url}" target="_blank" rel="noopener noreferrer" class="video-link">${v.title}</a></div>
                <div class="video-views">${formatNumber(v.views)} views • ${v.category}</div>
            </div>
            <div class="video-metric">
                <div class="metric-value">${v.ctr}%</div>
                <div class="metric-label">CTR</div>
            </div>
        </div>
    `).join('');
}

// ===== VIDEO TABLE =====
function initVideoTable() {
    const tbody = document.getElementById('videoTableBody');
    if (!tbody) return;

    renderVideoTable(topVideos);

    const searchInput = document.getElementById('videoSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            const filtered = topVideos.filter(v =>
                v.title.toLowerCase().includes(q) || v.category.toLowerCase().includes(q)
            );
            renderVideoTable(filtered);
        });
    }
}

function renderVideoTable(videos) {
    const tbody = document.getElementById('videoTableBody');
    tbody.innerHTML = videos.map((v, i) => `
        <tr>
            <td>${i + 1}</td>
            <td style="font-weight:600; max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"><a href="${v.url}" target="_blank" rel="noopener noreferrer" class="video-link">${v.title}</a></td>
            <td><span style="color:${v.category === 'Cars' ? orangeColor : v.category === 'Pranks' ? greenColor : '#a0a0a0'}">${v.category}</span></td>
            <td>${formatNumber(v.views)}</td>
            <td>${formatNumber(v.likes)}</td>
            <td>${formatNumber(v.comments)}</td>
            <td>${v.ctr}%</td>
            <td><span class="status-badge ${v.status}">${v.status === 'top' ? '🔥 Top' : v.status === 'mid' ? '📊 Average' : '⚠️ Low'}</span></td>
        </tr>
    `).join('');
}

// ===== VIDEO PERFORMANCE CHART =====
function initVideoPerformanceChart() {
    const ctx = document.getElementById('videoPerformanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topVideos.slice(0, 10).map(v => v.title.substring(0, 20) + '...'),
            datasets: [{
                label: 'Views',
                data: topVideos.slice(0, 10).map(v => v.views),
                backgroundColor: topVideos.slice(0, 10).map(v =>
                    v.status === 'top' ? greenColor + '66' : v.status === 'mid' ? orangeColor + '66' : '#E65C5C66'
                ),
                borderColor: topVideos.slice(0, 10).map(v =>
                    v.status === 'top' ? greenColor : v.status === 'mid' ? orangeColor : '#E65C5C'
                ),
                borderWidth: 2,
                borderRadius: 8,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    borderColor: '#2a2a2a',
                    borderWidth: 1,
                    cornerRadius: 10,
                    callbacks: {
                        label: (ctx) => `Views: ${formatNumber(ctx.parsed.x)}`
                    }
                }
            },
            scales: {
                x: { grid: { color: gridColor }, ticks: { callback: v => formatNumber(v) } },
                y: { grid: { display: false }, ticks: { font: { size: 11 } } }
            },
            animation: { duration: 1500, easing: 'easeOutQuart' }
        }
    });
}

// ===== SOCIAL MINI CHARTS =====
function initSocialMiniCharts() {
    const configs = [
        { id: 'ytMiniChart', data: [820, 890, 940, 1000, 1080, 1150, 1220, 1294], color: '#FF4444' },
        { id: 'igMiniChart', data: [780, 860, 940, 1020, 1100, 1180, 1300, 1400], color: '#E1306C' },
        { id: 'ttMiniChart', data: [1100, 1300, 1480, 1620, 1780, 1920, 2060, 2200], color: '#ffffff' },
    ];

    configs.forEach(({ id, data, color }) => {
        const ctx = document.getElementById(id);
        if (!ctx) return;
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 80);
        gradient.addColorStop(0, color + '22');
        gradient.addColorStop(1, 'transparent');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map((_, i) => i),
                datasets: [{
                    data: data,
                    borderColor: color,
                    borderWidth: 2,
                    fill: true,
                    backgroundColor: gradient,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: { x: { display: false }, y: { display: false } },
                elements: { point: { radius: 0 } },
                animation: { duration: 1500 }
            }
        });
    });
}

// ===== CROSS-PLATFORM CHART =====
function initCrossPlatformChart() {
    const ctx = document.getElementById('crossPlatformChart');
    if (!ctx) return;

    const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'YouTube',
                    data: [980, 1040, 1100, 1150, 1220, 1294],
                    borderColor: '#FF4444',
                    borderWidth: 2.5,
                    tension: 0.4,
                    pointBackgroundColor: '#FF4444',
                },
                {
                    label: 'Instagram',
                    data: [920, 1020, 1100, 1180, 1300, 1400],
                    borderColor: '#E1306C',
                    borderWidth: 2.5,
                    tension: 0.4,
                    pointBackgroundColor: '#E1306C',
                },
                {
                    label: 'TikTok',
                    data: [1480, 1620, 1780, 1920, 2060, 2200],
                    borderColor: '#ffffff',
                    borderWidth: 2.5,
                    tension: 0.4,
                    pointBackgroundColor: '#ffffff',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: {
                    display: true, position: 'top', align: 'end',
                    labels: { usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 11 } }
                },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    borderColor: '#2a2a2a',
                    borderWidth: 1,
                    cornerRadius: 10,
                    callbacks: {
                        label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}K`
                    }
                }
            },
            scales: {
                x: { grid: { color: gridColor } },
                y: { grid: { color: gridColor }, ticks: { callback: v => v + 'K' } }
            },
            animation: { duration: 2000, easing: 'easeOutQuart' }
        }
    });
}

// ===== AI STUDIO =====
function initAIStudio() {
    initVideoIdeas();
    initTrending();
    initCalendar();
}

function initVideoIdeas(filter = 'all') {
    const container = document.getElementById('ideasList');
    if (!container) return;

    const filtered = filter === 'all' ? videoIdeas : videoIdeas.filter(i => i.category === filter);

    container.innerHTML = filtered.map((idea, i) => `
        <div class="idea-card" style="animation-delay: ${i * 0.1}s">
            <div class="idea-category">${idea.category}</div>
            <div class="idea-title">${idea.title}</div>
            <div class="idea-desc">${idea.desc}</div>
            <div class="idea-metrics">
                <div class="idea-metric">📊 Est. Views: <strong>${idea.views}</strong></div>
                <div class="idea-metric">🎯 Engagement: <strong>${idea.engagement}</strong></div>
            </div>
        </div>
    `).join('');

    // Idea filter buttons
    document.querySelectorAll('.idea-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.idea-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            initVideoIdeas(btn.dataset.cat);
        });
    });
}

function initTrending() {
    const container = document.getElementById('trendingList');
    if (!container) return;

    container.innerHTML = trendingTopics.map((t, i) => `
        <div class="trending-item" style="animation: slideInRight 0.5s ease ${i * 0.1}s forwards; opacity: 0;">
            <div class="trending-rank">${i + 1}</div>
            <div class="trending-info">
                <div class="trending-topic">${t.topic}</div>
                <div class="trending-volume">${t.volume}</div>
            </div>
            <div class="trending-heat">${t.heat}</div>
        </div>
    `).join('');
}

function initCalendar() {
    const container = document.getElementById('calendarGrid');
    if (!container) return;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const contentDays = [3, 7, 10, 14, 17, 21, 23, 24, 28];
    const today = 23;

    let html = days.map(d => `<div class="calendar-day-header">${d}</div>`).join('');

    // Start from a Monday (offset 5 empty days for Feb starting on Sat — simplified)
    for (let i = 0; i < 3; i++) html += `<div class="calendar-day" style="visibility:hidden"></div>`;
    for (let day = 1; day <= 28; day++) {
        const hasContent = contentDays.includes(day);
        const isToday = day === today;
        html += `<div class="calendar-day ${hasContent ? 'has-content' : ''} ${isToday ? 'today' : ''}">${day}</div>`;
    }

    container.innerHTML = html;
}

// ===== CHATBOX =====
function initChatbox() {
    const toggle = document.getElementById('chatboxToggle');
    const chatbox = document.getElementById('chatbox');
    const closeBtn = document.getElementById('chatboxClose');
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    const messages = document.getElementById('chatboxMessages');
    const suggestions = document.querySelectorAll('.suggestion-chip');

    if (!toggle || !chatbox) return;

    toggle.addEventListener('click', () => {
        chatbox.classList.toggle('open');
    });

    closeBtn.addEventListener('click', () => {
        chatbox.classList.remove('open');
    });

    function sendMessage(text) {
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.innerHTML = `
            <div class="chat-avatar user-avatar">GH</div>
            <div class="chat-bubble">${text}</div>
        `;
        messages.appendChild(userMsg);
        messages.scrollTop = messages.scrollHeight;

        // Add typing indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'chat-message ai';
        typingEl.innerHTML = `
            <div class="chat-avatar ai-avatar"><i data-lucide="bot" style="width:18px;height:18px"></i></div>
            <div class="chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>
        `;
        messages.appendChild(typingEl);
        messages.scrollTop = messages.scrollHeight;
        if (window.lucide) lucide.createIcons();

        // Simulate response
        setTimeout(() => {
            typingEl.remove();

            const response = aiResponses[text] || generateSmartResponse(text);

            const aiMsg = document.createElement('div');
            aiMsg.className = 'chat-message ai';
            aiMsg.innerHTML = `
                <div class="chat-avatar ai-avatar"><i data-lucide="bot" style="width:18px;height:18px"></i></div>
                <div class="chat-bubble">${formatMarkdown(response)}</div>
            `;
            messages.appendChild(aiMsg);
            messages.scrollTop = messages.scrollHeight;
            if (window.lucide) lucide.createIcons();
        }, 1500 + Math.random() * 1000);
    }

    sendBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        sendMessage(text);
        input.value = '';
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const text = input.value.trim();
            if (!text) return;
            sendMessage(text);
            input.value = '';
        }
    });

    suggestions.forEach(chip => {
        chip.addEventListener('click', () => {
            sendMessage(chip.dataset.q);
        });
    });
}

function generateSmartResponse(question) {
    const q = question.toLowerCase();

    if (q.includes('subscriber') || q.includes('subs')) {
        return `📊 Your subscriber stats:\n\n- **Current:** 1,294,715 subscribers\n- **Monthly growth:** +142,380 (+12.4%)\n- **Projected to 2M:** August 2026\n\nYour growth rate has been accelerating since October 2025, driven by viral car content and prank videos.`;
    }
    if (q.includes('revenue') || q.includes('money') || q.includes('earn')) {
        return `💰 Revenue breakdown:\n\n- **Total estimated:** R 284,000/month\n- **AdSense:** R 180,000\n- **Sponsorships:** R 80,000\n- **Merch:** R 24,000\n\nYour CPM averages R 15.50, which is strong for South African content. Focus on longer videos (10+ min) to maximize ad revenue.`;
    }
    if (q.includes('tiktok') || q.includes('instagram') || q.includes('social')) {
        return `📱 Social Media Overview:\n\n| Platform | Handle | Followers | Engagement |\n|----------|--------|-----------|------------|\n| YouTube | @GhostHlubi | 1.29M | 8.2% |\n| Instagram | @ghost.hlubi | 1.4M | 3.2% |\n| TikTok | @almightyghosthlubi | 2.2M | 4.8% |\n\n**Key Insight:** TikTok is actually your **biggest platform** at 2.2M followers with 75.5M likes! You're crushing it on short-form. Consider repurposing more YouTube content as TikTok clips to maintain momentum.`;
    }
    if (q.includes('trend') || q.includes('viral')) {
        return `🔥 Trending opportunities for you:\n\n1. **AI-powered content** — 12.4K searches, growing fast\n2. **Couple prank videos** — 22.1K searches, your sweet spot\n3. **Supercar reviews 2025** — 15.3K searches, perfect for your car content\n4. **24-hour challenges** — 18.7K searches, proven format\n\nI'd recommend combining trends: "I Let AI Choose My 24-Hour Challenge" could go viral! 🚀`;
    }

    return `Great question! Based on your BlowUp channel analytics:\n\n- **Channel health:** Excellent — 12.4% monthly growth\n- **Content strategy:** Pranks and Cars are your strongest categories\n- **Key opportunity:** Increase Shorts output and TikTok cross-posting\n\nWould you like me to dive deeper into any specific area? I can analyze individual videos, suggest content ideas, or create a growth strategy! 💡`;
}

function formatMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/\|(.*?)\|/g, '<span style="opacity:0.7">|</span>$1<span style="opacity:0.7">|</span>');
}

// ===== PLATFORM BARS ANIMATION =====
function initPlatformBars() {
    const bars = document.querySelectorAll('.platform-bar');
    bars.forEach(bar => {
        const width = bar.dataset.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-animate').forEach(card => {
        observer.observe(card);
    });

    // Staggered initial load
    setTimeout(() => {
        const cards = document.querySelectorAll('#page-overview .card-animate');
        cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 120);
        });
    }, 200);
}

// ===== GENERATE IDEAS BUTTON =====
document.addEventListener('click', (e) => {
    if (e.target.closest('#generateIdeasBtn')) {
        const btn = e.target.closest('#generateIdeasBtn');
        btn.style.transform = 'scale(0.95)';
        btn.textContent = '⏳ Generating...';
        setTimeout(() => {
            // Shuffle and pick random ideas
            const shuffled = [...videoIdeas].sort(() => Math.random() - 0.5);
            const container = document.getElementById('ideasList');
            container.innerHTML = shuffled.slice(0, 5).map((idea, i) => `
                <div class="idea-card" style="animation-delay: ${i * 0.15}s">
                    <div class="idea-category">${idea.category}</div>
                    <div class="idea-title">${idea.title}</div>
                    <div class="idea-desc">${idea.desc}</div>
                    <div class="idea-metrics">
                        <div class="idea-metric">📊 Est. Views: <strong>${idea.views}</strong></div>
                        <div class="idea-metric">🎯 Engagement: <strong>${idea.engagement}</strong></div>
                    </div>
                </div>
            `).join('');
            btn.innerHTML = '<i data-lucide="sparkles" style="width:16px;height:16px"></i> Generate Ideas';
            btn.style.transform = '';
            if (window.lucide) lucide.createIcons();
        }, 1200);
    }
});

// ===== UTILITIES =====
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
}
