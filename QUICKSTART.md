# 🚀 Quick Start Guide - SOC Automation Platform

## ✅ Getting Started (5 minutes)

### Step 1: Verify Installation
Your development environment is already set up and running!

**Current Status:**
- ✅ Dependencies installed
- ✅ Dev server running at `http://localhost:3000`
- ✅ All components built and ready

### Step 2: Explore the Application

#### Public Landing Page
Navigate to: `http://localhost:3000`

**Features to Check:**
- Hero section with animated backgrounds
- Problem/Solution cards with hover effects
- Tech stack integration preview
- Responsive design (try resizing your browser)

#### Dashboard Application
Navigate to: `http://localhost:3000/app`

**Pages to Explore:**

1. **Dashboard** (`/app`)
   - View real-time KPIs (Total Alerts, Response Time, Cost Saved)
   - Interactive charts (Response Time & Alert Distribution)
   - Recent critical alerts feed

2. **Alerts** (`/app/alerts`)
   - Filter by severity (Critical, High, Medium, Low)
   - Search alerts by ID, type, or source
   - Action buttons: Investigate, Auto-Respond, Escalate, Block

3. **Playbooks** (`/app/playbooks`)
   - View automated response workflows
   - Filter by category
   - Run playbooks with one click
   - See success rates and execution times

4. **Investigation** (`/app/investigation`)
   - Deep-dive incident analysis
   - IP intelligence and threat scoring
   - User behavior timeline
   - AI-powered recommendations

5. **Audit Logs** (`/app/audit`)
   - Complete system action history
   - Filter by status
   - Export functionality

6. **Settings** (`/app/settings`)
   - Integration management (SIEM, EDR, Firewall, etc.)
   - System preferences toggles
   - API configuration

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'cyber-blue': '#YOUR_COLOR',
  'cyber-green': '#YOUR_COLOR',
  // ... etc
}
```

### Update API Endpoint
Edit `src/services/api.js`:
```javascript
export const api = axios.create({
  baseURL: 'https://your-backend-url.com/',
});
```

### Add New Pages
1. Create component in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
```javascript
<Route path="your-route" element={<YourPage />} />
```
3. Add navigation in `src/components/layout/Sidebar.jsx`

## 🔌 Backend Integration Steps

### 1. Mock Data → Real API
In `src/services/api.js`, for each function:

**Before (Mock):**
```javascript
getDashboardMetrics: async () => {
  return mockDashboardData();
},
```

**After (Real API):**
```javascript
getDashboardMetrics: async () => {
  return api.get('/api/dashboard');
},
```

### 2. Authentication
Add token management:
```javascript
// Login
const response = await api.post('/api/auth/login', { email, password });
localStorage.setItem('auth_token', response.data.token);

// Requests automatically include token (already configured)
```

### 3. Real-time Updates
Add WebSocket connection:
```javascript
const ws = new WebSocket('ws://your-backend.com/ws');
ws.onmessage = (event) => {
  // Update state with new alerts
};
```

## 🚀 Deployment Guide

### Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
vercel deploy
```

### Build for Production
```bash
npm run build
# Output: dist/ folder ready for deployment
```

## 📊 Mock Data Overview

All mock data is in `src/services/api.js`:

- **Dashboard Metrics**: 24-hour response time data, alert distribution
- **Alerts**: 8 sample alerts with different severities
- **Playbooks**: 6 automated workflows across categories
- **Investigations**: Evidence logs, IP intel, user timelines, AI analysis
- **Audit Logs**: Historical system actions
- **Integrations**: 6 security tool integrations

## 🎯 Development Tips

### Hot Reload
Changes to any file automatically refresh the browser. Try:
1. Edit a color in `tailwind.config.js`
2. Change text in any component
3. See instant updates!

### Component Structure
```
Component
├── State Management (useState, useEffect)
├── API Calls (from services/api.js)
├── Helper Functions
├── Render Logic
└── Styling (Tailwind classes)
```

### Best Practices
- ✅ Keep components under 300 lines
- ✅ Extract reusable components
- ✅ Use Tailwind utility classes
- ✅ Comment API integration points
- ✅ Handle loading and error states

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Updating
```bash
# Rebuild Tailwind
npm run dev
# Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

## 📚 Next Steps

1. ✅ **Explore**: Navigate through all pages
2. ✅ **Customize**: Change colors, add content
3. ✅ **Backend**: Build API endpoints
4. ✅ **Integrate**: Connect frontend to backend
5. ✅ **Deploy**: Ship to production!

## 🎓 Learning Resources

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Recharts**: https://recharts.org
- **React Router**: https://reactrouter.com

## 💡 Feature Ideas

**Enhancements to Add:**
- [ ] Dark/Light theme toggle
- [ ] User authentication flow
- [ ] WebSocket for real-time alerts
- [ ] Export reports to PDF
- [ ] Alert notification sounds
- [ ] Keyboard shortcuts
- [ ] Advanced filtering
- [ ] Drag-and-drop playbook builder
- [ ] Custom dashboard widgets
- [ ] Multi-language support

---

**🎉 Your SOC Automation Platform is ready!**

Open `http://localhost:3000` and start exploring!

Questions? Check the README.md for detailed documentation.
