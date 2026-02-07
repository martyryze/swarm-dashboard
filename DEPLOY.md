# 🚀 Deploy Amiko Swarm Dashboard

## Option 1: One-Click Deploy to Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/amiko-ai/swarm-dashboard)

## Option 2: Manual Netlify Deployment

### Step 1: Push to GitHub
```bash
# Create new GitHub repo called 'amiko-swarm-dashboard'
# Then:
git remote add origin https://github.com/yourusername/amiko-swarm-dashboard.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"New site from Git"**
3. Choose **GitHub** and authorize
4. Select your `amiko-swarm-dashboard` repo
5. Deploy settings:
   - **Build command**: Leave empty (or `echo "Static site"`)
   - **Publish directory**: `.` (root)
6. Click **"Deploy site"**

### Step 3: Get Your URL
- Dashboard will be live at: `https://random-name-123456.netlify.app`
- To customize: Go to **Site settings** → **Change site name**
- Suggested: `amiko-swarm-dashboard` → `https://amiko-swarm-dashboard.netlify.app`

## Option 3: Deploy to Vercel (Alternative)

1. Push code to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repo
5. Deploy with default settings

Your URL: `https://amiko-swarm-dashboard.vercel.app`

## Option 4: Deploy to GitHub Pages

1. Push to GitHub
2. Go to repo **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / **root**
5. Your URL: `https://yourusername.github.io/amiko-swarm-dashboard`

## ✅ Verification

After deployment, test your dashboard:
1. Visit your live URL
2. Enter password (see secure password storage)
3. Verify stats are loading
4. Check auto-refresh (wait 15 minutes or refresh manually)

## 🔐 Access Details

**Password**: See secure storage / contact admin  
**Auto-refresh**: Every 15 minutes  
**Mobile**: Fully responsive
**Uptime**: 24/7

## 🛠️ Post-Deployment

### Custom Domain (Optional)
- **Netlify**: Site settings → Domain management → Add custom domain
- **Vercel**: Project settings → Domains → Add domain

### Analytics (Optional)
Add Google Analytics or other tracking:
```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Password Change
Edit `index.html`:
```javascript
const DASHBOARD_PASSWORD = "YourNewPassword2026!";
```
Commit and push changes.

## 📊 Dashboard Features Verified

✅ Password protection  
✅ 24/7 availability  
✅ Mobile responsive  
✅ Auto-refresh every 15 minutes  
✅ Real-time activity feed  
✅ Platform statistics (Twitter, AmikoNet, Store)  
✅ Agent activity monitoring  
✅ HTTPS secure by default  

## 🚨 Need Help?

**Dashboard not loading?**
- Check URL is correct
- Try incognito/private browsing mode
- Clear browser cache

**Deployment failed?**
- Check GitHub repo is public
- Verify all files are committed and pushed
- Check hosting service status page

**Password issues?**
- Ensure exact match with stored password
- No extra spaces before/after
- Case sensitive

Contact Ava or Matthew for additional support.