# 🎨 Component Showcase - SOC Automation Platform

## Visual Component Library

This document provides a visual reference for all major components in the SOC platform.

---

## 🎭 Design Tokens

### Colors
```
🔵 Cyber Blue (#00FFFF)    - Primary actions, borders, charts
🟢 Cyber Green (#39FF14)   - Success states, positive metrics
🟣 Cyber Purple (#8A2BE2)  - Secondary actions, AI features
🌸 Cyber Pink (#FF00FF)    - Tertiary accents, highlights
🔴 Cyber Red (#FF0040)     - Critical alerts, danger states
⚫ Cyber Dark (#0A0F1F)    - Background, dark surfaces
```

### Typography
```
Headers:  Orbitron (400, 700, 900)
Body:     Inter (300, 400, 500, 600, 700)
Mono:     System monospace for IDs, IPs
```

---

## 📦 Component Catalog

### 1. Cards

#### Glass Card (Base)
```
Background: bg-white bg-opacity-5
Backdrop:   backdrop-blur-md
Border:     border-white border-opacity-10
Radius:     rounded-xl
```
**Used in:** All dashboard panels, stats, settings

#### Glass Card Hover
```
Base glass card +
Hover: bg-opacity-10, border-opacity-20
Shadow: shadow-cyber-blue/20
Transition: 300ms
```
**Used in:** Clickable cards, playbooks, integrations

#### Neon Border Card
```
Border: border-cyber-blue
Shadow: shadow-cyber-blue/50
Glow effect on borders
```
**Used in:** Featured sections, AI analysis

---

### 2. Buttons

#### Primary Button (`btn-primary`)
```
Background: Gradient from cyber-blue to cyber-purple
Text: White, semibold
Hover: Shadow glow + scale(1.05)
Padding: px-6 py-3
Radius: rounded-lg
```
**Used in:** Main actions, CTAs, save buttons

#### Secondary Button (`btn-secondary`)
```
Border: 2px solid cyber-blue
Text: cyber-blue, semibold
Hover: bg-cyber-blue, text-cyber-dark
Padding: px-6 py-3
Radius: rounded-lg
```
**Used in:** Alternative actions, cancel buttons

#### Icon Button
```
Background: bg-opacity-20
Icon color: Theme color
Size: w-8 h-8 to w-10 h-10
Hover: bg-opacity-30
```
**Used in:** Action buttons in tables, toolbars

---

### 3. Badges & Pills

#### Severity Badge
```css
Critical: border-cyber-red text-cyber-red
High:     border-cyber-purple text-cyber-purple
Medium:   border-yellow-400 text-yellow-400
Low:      border-cyber-blue text-cyber-blue
```
**Style:** `px-3 py-1 rounded-full text-xs font-semibold border`

#### Status Pill
```css
Success:      bg-cyber-green/20 text-cyber-green
In-Progress:  bg-cyber-blue/20 text-cyber-blue
Escalated:    bg-cyber-red/20 text-cyber-red
Pending:      bg-yellow-400/20 text-yellow-400
```
**Style:** `px-3 py-1 rounded-full text-xs font-semibold`

---

### 4. Navigation Components

#### Sidebar
```
Width: w-64
Background: bg-cyber-darker
Border: border-r border-white/10
Sections:
  - Logo header (h-16)
  - Navigation links
  - System status footer
```

**Active Link:**
```
Background: Gradient from cyber-blue/20 to cyber-purple/20
Border-left: 4px border-cyber-blue
Text: white
```

**Inactive Link:**
```
Text: gray-400
Hover: text-white, bg-white/5
```

#### Navbar
```
Height: h-16
Background: bg-cyber-darker
Border: border-b border-white/10
Layout:
  - Search bar (left)
  - Notifications + Profile (right)
```

---

### 5. Data Display

#### Table
```
Header:
  - Background: Transparent
  - Border: border-b border-white/10
  - Text: text-gray-400 uppercase tracking-wider

Rows:
  - Hover: bg-white/5
  - Border: divide-y divide-white/5
  - Padding: px-6 py-4
```

#### Charts

**Line Chart (Response Time):**
```
Library: Recharts
Colors: stroke="#00FFFF"
Grid: strokeDasharray="3 3"
Background: Transparent
Tooltip: Custom styled (cyber theme)
```

**Donut Chart (Alert Distribution):**
```
Library: Recharts
Colors: Custom per category
Inner Radius: 60
Outer Radius: 100
Padding Angle: 5
```

---

### 6. Forms & Inputs

#### Text Input
```
Background: bg-white bg-opacity-5
Border: border-white border-opacity-10
Focus: border-cyber-blue
Text: text-white
Placeholder: text-gray-500
Padding: px-4 py-2
Radius: rounded-lg
```

#### Search Input
```
Text input + icon (left-3)
Icon: Lucide Search
Width: w-full max-w-md
```

#### Toggle Switch
```
Track: w-11 h-6 bg-gray-700
Ball: w-5 h-5 bg-white
Active: bg-cyber-blue
Transition: Smooth slide
```

---

### 7. Special Components

#### KPI Card
```
Structure:
  - Icon (top-left) with themed color
  - Trend icon (top-right) - TrendingUp
  - Value (large, bold, white)
  - Label (small, gray-400)
  - Gradient background blur

Background Gradient Examples:
  - Red alerts: from-cyber-red/20 to-red-900/20
  - Green success: from-cyber-green/20 to-green-900/20
```

#### Playbook Card
```
Structure:
  - Colored top stripe (h-2)
  - Icon badge (w-12 h-12, gradient)
  - Title + Description
  - Category tag
  - Stats grid (3 columns)
  - Action buttons (Run, Edit, Logs)

Hover: Scale effects, border glow
```

#### Investigation Timeline
```
Structure:
  - Vertical line (gradient from blue to red)
  - Time nodes (colored circles)
  - Glass cards with content
  - Risk level indicators

Colors by Risk:
  - Critical: bg-cyber-red
  - High: bg-orange-400
  - Medium: bg-yellow-400
  - Low: bg-cyber-green
```

#### Evidence Log Entry
```
Structure:
  - Left border (4px, color by severity)
  - Timestamp (top, mono font)
  - Type badge (top-right)
  - Description text

Border Colors:
  - Critical: #FF0040
  - High: #8A2BE2
  - Medium: #FFB800
  - Low: #00FFFF
```

---

### 8. Animations & Effects

#### Pulse Animation
```css
@keyframes pulse-glow {
  0%, 100%: opacity 1, shadow 20px
  50%: opacity 0.8, shadow 40px
}
```
**Used in:** Live status indicators, critical alerts

#### Float Animation
```css
@keyframes float {
  0%, 100%: translateY(0px)
  50%: translateY(-10px)
}
```
**Used in:** Hero icons, featured elements

#### Slide In Animation
```css
@keyframes slideInUp {
  from: opacity 0, translateY(30px)
  to: opacity 1, translateY(0)
}
```
**Used in:** Page loads, content reveals

#### Hover Transforms
```css
Scale: hover:scale-105
Glow: hover:shadow-lg hover:shadow-cyber-blue/50
Border: hover:border-opacity-20
```

---

### 9. Layout Patterns

#### Page Header
```
Structure:
  - Title (3xl, Orbitron, bold)
  - Description (gray-400)
  - Action button (right side)
  - Status indicator (optional)
```

#### Stats Grid
```
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
Gap: gap-6
Cards: Glass cards with KPIs
```

#### Two-Column Dashboard
```
Left (2/3): Main chart
Right (1/3): Secondary chart/stats
Gap: gap-6
Responsive: Stack on mobile
```

---

### 10. Color Combinations

#### Alert Severity Combinations
```
Critical:
  - Border: #FF0040
  - Background: rgba(255, 0, 64, 0.1)
  - Text: #FF0040

High:
  - Border: #8A2BE2
  - Background: rgba(138, 43, 226, 0.1)
  - Text: #8A2BE2

Medium:
  - Border: #FFB800
  - Background: rgba(255, 184, 0, 0.1)
  - Text: #FFB800

Low:
  - Border: #00FFFF
  - Background: rgba(0, 255, 255, 0.1)
  - Text: #00FFFF
```

#### Status Combinations
```
Success/Resolved:
  - Icon: CheckCircle
  - Color: #39FF14
  - Background: rgba(57, 255, 20, 0.1)

Warning/Pending:
  - Icon: Clock
  - Color: #FFB800
  - Background: rgba(255, 184, 0, 0.1)

Error/Critical:
  - Icon: AlertTriangle
  - Color: #FF0040
  - Background: rgba(255, 0, 64, 0.1)

Info/Processing:
  - Icon: Activity
  - Color: #00FFFF
  - Background: rgba(0, 255, 255, 0.1)
```

---

### 11. Gradient Recipes

#### Hero Background
```css
Glow 1: w-96 h-96 bg-cyber-blue opacity-10 blur-3xl
Glow 2: w-96 h-96 bg-cyber-purple opacity-10 blur-3xl
Glow 3: w-96 h-96 bg-cyber-green opacity-10 blur-3xl

Animation: animate-pulse with delays
```

#### Gradient Text
```css
bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink
bg-clip-text text-transparent
```

#### Button Gradient
```css
bg-gradient-to-r from-cyber-blue to-cyber-purple
```

#### Category Gradients (Playbooks)
```css
Email Security: from-cyber-blue to-blue-500
Malware: from-cyber-red to-red-500
Access Control: from-cyber-green to-green-500
Data Loss Prevention: from-cyber-purple to-purple-500
Network Security: from-cyber-pink to-pink-500
User Behavior: from-yellow-400 to-orange-500
```

---

### 12. Icon Usage

#### Lucide Icons Library

**Navigation:**
- LayoutDashboard - Dashboard
- AlertTriangle - Alerts
- Layers - Playbooks
- Search - Investigation
- FileText - Audit Logs
- Settings - Settings

**Actions:**
- Play - Execute/Run
- Edit - Edit
- Save - Save
- Download - Export
- RefreshCw - Refresh
- Ban - Block

**Status:**
- CheckCircle - Success
- XCircle - Error
- Clock - Pending
- Activity - Processing
- TrendingUp - Positive trend

**Security:**
- Shield - Security/Protection
- Lock - Locked/Secure
- Key - Authentication
- User - User profile
- Globe - Network/IP

---

### 13. Spacing System

```
Padding:
  - Cards: p-6
  - Buttons: px-6 py-3
  - Inputs: px-4 py-2
  - Tables: px-6 py-4

Margins:
  - Section spacing: space-y-6
  - Card gaps: gap-6
  - Text spacing: mb-2, mb-4

Gaps:
  - Grid: gap-6
  - Flex: space-x-2, space-x-4
```

---

### 14. Border Styles

```
Glass Cards: border border-white border-opacity-10
Neon Cards: border border-cyber-blue
Table Rows: divide-y divide-white divide-opacity-5
Sections: border-b border-white border-opacity-10
Sidebar: border-r border-white border-opacity-10
```

---

### 15. Loading States

```
Spinner:
  - Icon: Activity
  - Size: w-16 h-16
  - Color: text-cyber-blue
  - Animation: animate-spin

Text: "Loading..."
Container: Center aligned, full height
```

---

### 16. Empty States

```
Icon: Large, gray-600 (w-16 h-16)
Text: "No items found..."
Container: Centered, py-12
Background: Subtle card
```

---

## 🎯 Component Usage Examples

### Dashboard KPI
```jsx
<div className="glass-card p-6 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyber-blue/20 to-blue-900/20 rounded-full blur-2xl opacity-50 -mr-16 -mt-16"></div>
  <div className="relative z-10">
    <AlertTriangle className="w-8 h-8 text-cyber-red" />
    <div className="text-3xl font-bold text-white">1247</div>
    <div className="text-sm text-gray-400">Total Alerts</div>
  </div>
</div>
```

### Alert Row
```jsx
<tr className="hover:bg-white hover:bg-opacity-5">
  <td className="px-6 py-4">
    <span className="px-3 py-1 rounded-full text-xs font-semibold border border-cyber-red text-cyber-red">
      CRITICAL
    </span>
  </td>
</tr>
```

### Playbook Card
```jsx
<div className="glass-card-hover overflow-hidden">
  <div className="h-2 bg-gradient-to-r from-cyber-blue to-blue-500"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-white mb-2">Phishing Response</h3>
    <button className="btn-primary w-full">
      <Play className="w-4 h-4 inline mr-2" />
      Run
    </button>
  </div>
</div>
```

---

## 🎨 Theming Notes

All components follow a consistent design language:
- Dark backgrounds with light text
- Neon accents for interaction
- Glassmorphism for depth
- Smooth animations for feedback
- Color-coded status indicators
- Monospace fonts for technical data

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Stacked cards
- Hamburger menu for sidebar
- Simplified tables (horizontal scroll)

### Tablet (768-1024px)
- Two column layouts
- Larger touch targets
- Sidebar toggle

### Desktop (> 1024px)
- Full layouts (3-4 columns)
- Persistent sidebar
- Hover effects active

---

This component library provides a complete reference for maintaining design consistency across the platform. All components use the established color tokens, spacing system, and interaction patterns documented above.
