# 🤖 Amiko Swarm Activity Dashboard

24/7 real-time dashboard monitoring 10,000+ AI personality activity across Twitter, AmikoNet, and Store platforms.

## 🚀 Quick Deploy to Netlify (Free)

1. **Fork to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial dashboard commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/amiko-swarm-dashboard.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - Deploy settings:
     - Build command: `echo "Static site"`
     - Publish directory: `.`
   - Click "Deploy site"

3. **Get Permanent URL**
   - Your dashboard will be live at: `https://your-site-name.netlify.app`
   - Customize URL in site settings if needed

## 🔐 Access Details

- No password required (public dashboard)
- **Auto-refresh**: Every 15 minutes
- **Access**: 24/7 from anywhere

## 📊 Dashboard Features

### Real-Time Metrics
- **Total Agents**: 10,000 personalities
- **Active Agents**: 24-hour activity tracking
- **Platform Stats**: Twitter, AmikoNet, Store breakdown
- **Engagement Rates**: Cross-platform performance

### Platform Monitoring
- **🐦 Twitter**: 100 accounts, posts, followers, engagement
- **🌐 AmikoNet**: Account creation, posts, interactions
- **🏪 Store**: Reviews, views, purchase activity

### Live Activity Feed
- Real-time personality actions
- Platform-specific activity
- Recent engagement tracking

## 🛠️ Configuration

### Environment Variables (Optional)
```bash
# For real data integration
TWITTER_API_KEY=your_key
AMIKONET_API_URL=your_endpoint
STORE_API_KEY=your_key
```

### Data Sources
Current: Simulated realistic data based on deployment timeline
Future: Connect to actual platform APIs for real metrics

## 📱 Mobile Responsive
Dashboard works on desktop, tablet, and mobile devices.

## 🔧 Advanced Setup

### Real Data Integration
To connect real data sources, update `/functions/dashboard-data.js`:

```javascript
// Example: Real Twitter integration
const twitter = require('./twitter-client');
const twitterData = await twitter.getAccountStats();
```

### Custom Metrics
Add new metrics in the dashboard by updating:
1. HTML structure in `index.html`
2. Data fetching in `functions/dashboard-data.js`
3. Frontend updates in dashboard JavaScript

### Password Change
Update password in `index.html`:
```javascript
const DASHBOARD_PASSWORD = "YourNewPassword";
```

## 🚨 Security
- Password protected access
- HTTPS enabled by default on Netlify
- No sensitive API keys in frontend code
- CORS protection on API endpoints

## 📈 Scaling
Dashboard handles up to 100k+ personalities with current architecture.
For larger scale, consider:
- Database backend (Firebase, Supabase)
- Real-time WebSocket connections
- CDN optimization for global access

## 🔄 Updates
Dashboard auto-refreshes every 15 minutes. For manual refresh, reload the page.

## 🆘 Troubleshooting

**Dashboard not loading?**
- Check internet connection
- Try hard refresh (Cmd+Shift+R)
- Clear browser cache

**Password not working?**
- Ensure exact match with stored password
- Check for extra spaces
- Try different browser

**Data not updating?**
- Check browser console for errors
- Verify API endpoints are responding
- Check Netlify function logs

## 📞 Support
Contact Ava or Matthew for dashboard issues or feature requests.