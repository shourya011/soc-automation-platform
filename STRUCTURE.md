# 📁 Project Structure - SOC Automation Platform

## Complete Directory Tree

```
hackathon/
│
├── 📄 Configuration Files
│   ├── package.json              # Project dependencies & scripts
│   ├── package-lock.json         # Locked dependency versions
│   ├── vite.config.js            # Vite build configuration
│   ├── tailwind.config.js        # Tailwind CSS custom theme
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .gitignore                # Git ignore rules
│   ├── netlify.toml              # Netlify deployment config
│   └── vercel.json               # Vercel deployment config
│
├── 📚 Documentation
│   ├── README.md                 # Main project documentation
│   ├── QUICKSTART.md             # 5-minute getting started guide
│   ├── PROJECT_SUMMARY.md        # Comprehensive project overview
│   ├── COMPONENTS.md             # Visual component library reference
│   ├── FEATURES.md               # Complete feature inventory (300+)
│   ├── PREVIEW.md                # Visual preview guide with ASCII art
│   └── COMPLETION.md             # Project completion summary
│
├── 📦 Public Assets
│   └── index.html                # HTML entry point with fonts
│
├── 📂 Source Code (src/)
│   │
│   ├── 🎨 Styling
│   │   └── index.css             # Global styles, Tailwind imports, custom classes
│   │
│   ├── 🚀 Entry Point
│   │   ├── main.jsx              # React app bootstrap
│   │   └── App.jsx               # Root component with routing
│   │
│   ├── 🧩 Components
│   │   └── layout/
│   │       ├── AppLayout.jsx     # Main application wrapper
│   │       ├── Sidebar.jsx       # Navigation sidebar with links
│   │       └── Navbar.jsx        # Top navigation bar with search
│   │
│   ├── 📄 Pages
│   │   ├── LandingPage.jsx       # Public landing page
│   │   ├── Dashboard.jsx         # Dashboard overview with KPIs & charts
│   │   ├── Alerts.jsx            # Alert management table with filters
│   │   ├── Playbooks.jsx         # Playbook automation cards
│   │   ├── Investigation.jsx     # Investigation center with analysis
│   │   ├── AuditLogs.jsx         # Audit log viewer with search
│   │   └── Settings.jsx          # Settings & integrations panel
│   │
│   └── 🔧 Services
│       └── api.js                # API service layer with mock data
│
└── 📦 Dependencies (node_modules/)
    └── [235 packages installed]
```

---

## 📊 File Statistics

### Configuration Files (8)
- Project setup and build configs
- Deployment configurations
- Styling setup

### Documentation Files (7)
- Comprehensive guides
- Component references
- Feature documentation

### Source Code Files (15)
- React components
- Pages and layouts
- Services and utilities

### Total Lines of Code
- **React Components:** ~2,500 lines
- **Styling (CSS):** ~100 lines
- **Configuration:** ~150 lines
- **Documentation:** ~3,000 lines
- **Total:** ~5,750 lines

---

## 🎯 Key Directories Explained

### `/src/components/layout/`
Contains reusable layout components that wrap the entire application:
- **AppLayout.jsx** - Main wrapper with sidebar + content area
- **Sidebar.jsx** - Left navigation with routes
- **Navbar.jsx** - Top bar with search and profile

### `/src/pages/`
All application pages (7 total):
1. **LandingPage.jsx** - Marketing page (public)
2. **Dashboard.jsx** - Main analytics dashboard
3. **Alerts.jsx** - Alert management interface
4. **Playbooks.jsx** - Automation workflows
5. **Investigation.jsx** - Incident investigation
6. **AuditLogs.jsx** - System audit trail
7. **Settings.jsx** - Configuration panel

### `/src/services/`
Backend integration layer:
- **api.js** - Axios instance, service functions, mock data

---

## 📦 Dependencies Overview

### Core Framework (4)
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "vite": "^5.0.8"
}
```

### UI Libraries (3)
```json
{
  "lucide-react": "^0.294.0",
  "recharts": "^2.10.3",
  "tailwindcss": "^3.3.6"
}
```

### Utilities (2)
```json
{
  "axios": "^1.6.2",
  "zustand": "^4.4.7"
}
```

### Dev Dependencies (3)
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

---

## 🔍 File Purposes

### Configuration Files

**package.json**
- Dependencies management
- Build scripts (dev, build, preview)
- Project metadata

**vite.config.js**
- Dev server configuration (port 3000)
- Build optimization settings
- React plugin setup

**tailwind.config.js**
- Custom color palette (cyber theme)
- Font families (Orbitron, Inter)
- Custom animations
- Utility extensions

**postcss.config.js**
- Tailwind CSS processing
- Autoprefixer for browser compatibility

**.gitignore**
- Excludes node_modules
- Ignores build output
- Hides environment variables

**netlify.toml**
- SPA routing configuration
- Build directory specification

**vercel.json**
- Rewrite rules for SPA
- Deployment settings

---

### Documentation Files

**README.md** (Primary Documentation)
- Complete project overview
- Installation instructions
- API integration guide
- Deployment steps
- Feature descriptions

**QUICKSTART.md** (Quick Start)
- 5-minute setup guide
- Step-by-step exploration
- Customization tips
- Development tips

**PROJECT_SUMMARY.md** (Overview)
- Executive summary
- What's been built
- Technical details
- Success metrics
- Next steps

**COMPONENTS.md** (Design System)
- Component catalog
- Design tokens
- Color schemes
- Typography system
- Usage examples

**FEATURES.md** (Feature List)
- Complete feature inventory
- 300+ features documented
- Organized by page
- Checkboxes for tracking

**PREVIEW.md** (Visual Guide)
- ASCII art previews
- Layout descriptions
- Color scheme examples
- Interactive elements guide

**COMPLETION.md** (Summary)
- Project completion status
- Achievement summary
- Quick reference
- Next steps guide

---

### Source Files

**main.jsx**
- React app initialization
- Root rendering
- CSS imports

**App.jsx**
- Route configuration
- React Router setup
- Layout integration

**index.css**
- Tailwind imports
- Global styles
- Custom utility classes
- Animation definitions
- Scrollbar styling

**Layout Components**
- Sidebar: Navigation menu
- Navbar: Top bar with search
- AppLayout: Main wrapper

**Page Components**
- LandingPage: Hero, problems, solutions, CTA
- Dashboard: KPIs, charts, recent alerts
- Alerts: Table, filters, actions
- Playbooks: Cards, execution, metrics
- Investigation: Evidence, IP intel, timeline, AI
- AuditLogs: History, search, export
- Settings: Integrations, preferences

**Services**
- api.js: HTTP client, mock data, endpoints

---

## 🎨 Asset Organization

### Fonts (Google Fonts CDN)
- Orbitron (400, 700, 900)
- Inter (300-700)

### Icons (Lucide React)
- 50+ icons used throughout
- Imported as React components

### Colors (Tailwind Config)
- 6 custom cyber theme colors
- Extended palette

---

## 🚀 Build Output

### Development (`npm run dev`)
```
/
├── Vite dev server
├── Hot module replacement
└── Source maps enabled
```

### Production (`npm run build`)
```
dist/
├── index.html           # Optimized HTML
├── assets/
│   ├── index-[hash].js  # Bundled JavaScript
│   └── index-[hash].css # Bundled CSS
└── (Other optimized assets)
```

---

## 📂 Recommended Additions (Future)

```
hackathon/
├── .env                    # Environment variables
├── .env.example            # Environment template
├── tests/                  # Test files
│   ├── unit/
│   └── integration/
├── public/
│   ├── favicon.ico        # Site icon
│   └── logo.png           # Brand logo
├── docs/                   # Additional documentation
│   ├── API.md             # API documentation
│   └── DEPLOYMENT.md      # Deployment guide
└── scripts/               # Build/deploy scripts
    ├── deploy.sh
    └── backup.sh
```

---

## 🔧 Working with This Structure

### Adding a New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/layout/Sidebar.jsx`

### Adding a New Component
1. Create file in appropriate directory
2. Import in parent component
3. Use consistent naming

### Modifying Styles
1. Global styles → `src/index.css`
2. Tailwind config → `tailwind.config.js`
3. Component styles → Inline Tailwind classes

### API Integration
1. Add service function in `src/services/api.js`
2. Update baseURL when backend ready
3. Uncomment API calls
4. Remove mock data returns

---

## 📊 Size Analysis

### Before Build
- Source files: ~2.5 MB (including node_modules)
- Documentation: ~500 KB
- Config files: ~50 KB

### After Build (Production)
- Optimized bundle: ~500-800 KB (estimated)
- Gzipped: ~150-250 KB (estimated)
- Load time: <2 seconds

---

## 🎯 Directory Best Practices

✅ **Clear Organization**
- Components by type
- Pages in dedicated folder
- Services separated

✅ **Naming Conventions**
- PascalCase for components
- camelCase for utilities
- kebab-case for config files

✅ **File Structure**
- One component per file
- Related files together
- Clear imports/exports

✅ **Documentation**
- README at root
- Component docs inline
- API docs in comments

---

## 🔍 Quick File Finder

Need to edit something? Here's where to look:

**Change Colors:**
→ `tailwind.config.js`

**Update Landing Page:**
→ `src/pages/LandingPage.jsx`

**Modify Sidebar:**
→ `src/components/layout/Sidebar.jsx`

**Add API Endpoint:**
→ `src/services/api.js`

**Edit Dashboard Charts:**
→ `src/pages/Dashboard.jsx`

**Update Styles:**
→ `src/index.css`

**Change Routes:**
→ `src/App.jsx`

**Deployment Config:**
→ `netlify.toml` or `vercel.json`

---

**This structure provides a solid foundation for a scalable, maintainable SOC automation platform! 🚀**
