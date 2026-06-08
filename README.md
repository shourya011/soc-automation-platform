#  SOC Automation Platform

A professional-grade Security Operations Center (SOC) Automation Platform built with React, Tailwind CSS, and ready for backend integration.

##  Features

### Landing Page
- **Hero Section** with animated backgrounds and compelling CTAs
- **Problem/Solution Framework** showcasing the value proposition
- **Tech Stack Integration** preview showing compatibility with major security tools
- **Responsive Design** optimized for all devices

### Dashboard Application
- **Real-time Metrics** - KPIs for alerts, incidents, response time, and cost savings
- **Interactive Charts** - Line charts for response time trends, donut charts for alert distribution
- **Alert Management** - Dynamic table with filtering, sorting, and bulk actions
- **Playbook Automation** - Visual cards for automated response workflows
- **Investigation Center** - Deep-dive analysis with IP intelligence and user behavior timelines
- **Audit Logs** - Complete history of all system actions and automations
- **Settings Panel** - Integration management for security tools (SIEM, EDR, Firewalls, etc.)

##  Design System

### Color Palette
- **Background**: `#0A0F1F` (cyber-dark)
- **Neon Blue**: `#00FFFF` (cyber-blue)
- **Cyber Green**: `#39FF14` (cyber-green)
- **Electric Purple**: `#8A2BE2` (cyber-purple)
- **Cyber Pink**: `#FF00FF` (cyber-pink)
- **Cyber Red**: `#FF0040` (cyber-red)

### Typography
- **Headers**: Orbitron (Bold, ExtraBold)
- **Body**: Inter (Light to Bold)

### UI Effects
- Glassmorphism cards with backdrop blur
- Animated gradient backgrounds
- Neon glow effects on hover
- Pulse animations for real-time indicators
- Smooth transitions throughout

##  Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **State Management**: Zustand (optional - not yet implemented but ready)

##  Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

##  Routes

### Public Routes
- `/` - Landing Page

### Protected Routes (App)
- `/app` - Dashboard Overview
- `/app/alerts` - Alert Management
- `/app/playbooks` - Playbook Automation
- `/app/investigation` - Investigation Center
- `/app/investigation/:id` - Specific Investigation
- `/app/audit` - Audit Logs
- `/app/settings` - Settings & Integrations

##  API Integration

The application is configured to integrate with backend APIs. All API calls are centralized in `/src/services/api.js`.

### API Base URL
```javascript
baseURL: 'https://api.soc-automation.com/'
```

### Endpoints Ready for Integration

```javascript
// Dashboard
GET /api/dashboard - Fetch dashboard metrics

// Alerts
GET /api/alerts - Fetch all alerts (with filters)
PATCH /api/alerts/:id - Update alert status

// Playbooks
GET /api/playbooks - Fetch all playbooks
POST /api/playbooks/run - Execute a playbook

// Investigations
GET /api/investigations/:id - Fetch investigation details

// Audit Logs
GET /api/audit/logs - Fetch audit logs (with filters)

// Settings
GET /api/settings/integrations - Fetch integrations
POST /api/settings/integrations - Save integration config
```

### Mock Data
Currently using mock data functions in `api.js`. To connect to real backend:

1. Update the API base URL in `/src/services/api.js`
2. Uncomment the actual API calls
3. Comment out the mock data returns
4. Add authentication tokens as needed

##  Responsive Design

Fully responsive breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Backend Integration Checklist

- [ ] Set up Flask/FastAPI/Node.js backend
- [ ] Create database models for alerts, playbooks, investigations
- [ ] Implement authentication (JWT recommended)
- [ ] Build REST API endpoints matching frontend calls
- [ ] Add WebSocket support for real-time updates
- [ ] Set up CORS for cross-origin requests
- [ ] Deploy backend and update API base URL

##  Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI or connect GitHub repo
```

### Environment Variables
Create `.env` file for production:
```
VITE_API_BASE_URL=https://your-api-domain.com
```

## 📂 Project Structure

```
src/
├── components/
│   └── layout/
│       ├── AppLayout.jsx      # Main app wrapper
│       ├── Sidebar.jsx        # Navigation sidebar
│       └── Navbar.jsx         # Top navigation bar
├── pages/
│   ├── LandingPage.jsx        # Public landing page
│   ├── Dashboard.jsx          # Dashboard overview
│   ├── Alerts.jsx             # Alert management
│   ├── Playbooks.jsx          # Playbook automation
│   ├── Investigation.jsx      # Investigation center
│   ├── AuditLogs.jsx          # Audit log viewer
│   └── Settings.jsx           # Settings panel
├── services/
│   └── api.js                 # API service layer
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

##  Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  'cyber-dark': '#0A0F1F',
  'cyber-blue': '#00FFFF',
  // ... add your colors
}
```

### Fonts
Add fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

##  Contributing

This is a frontend-ready platform designed for integration with backend services. Key areas for enhancement:

1. **Real-time Updates**: Add WebSocket connections for live data
2. **Authentication**: Implement JWT-based auth with protected routes
3. **State Management**: Integrate Zustand for complex state needs
4. **Testing**: Add Jest/React Testing Library tests
5. **Performance**: Implement lazy loading and code splitting
6. **Accessibility**: Enhance ARIA labels and keyboard navigation

##  License

This project is created for demonstration and educational purposes.

##  Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open browser: `http://localhost:3000`
4. Explore the landing page and dashboard
5. Review API integration points in `/src/services/api.js`
6. Build your backend to match the API endpoints
7. Deploy and scale!
