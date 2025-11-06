# 📸 Visual Preview Guide - SOC Automation Platform

## What You'll See When You Open the Application

---

## 🌐 Landing Page Preview

### First Screen (Hero Section)
When you navigate to `http://localhost:3000`, you'll see:

```
┌────────────────────────────────────────────────────────────┐
│  [Shield Icon] SecureOps AI                                 │
│                                                              │
│         Automate. Orchestrate. Secure.                      │
│      (gradient text: blue → purple → pink)                  │
│                                                              │
│  AI-powered SOC automation that reduces incident            │
│  response time by 95%.                                      │
│                                                              │
│  [Try Demo Dashboard]  [Book a Call]                        │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │10M+      │ │< 5 min   │ │70%       │ │99.2%     │     │
│  │Alerts    │ │Response  │ │Cost Cut  │ │Success   │     │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- 3 glowing orbs float in background (blue, purple, green)
- Text fades in from bottom
- Stats cards have subtle glass effect
- Buttons glow on hover

---

### Problem Section
Scroll down to see:

```
┌────────────────────────────────────────────────────────────┐
│          The Challenge Security Teams Face                  │
│                                                              │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐       │
│  │ ⚠️         │    │ ⏰         │    │ 💰         │       │
│  │Alert       │    │Analyst     │    │Rising      │       │
│  │Overload    │    │Burnout     │    │Costs       │       │
│  │            │    │            │    │            │       │
│  │10,000+     │    │Manual      │    │$4.45M avg  │       │
│  │alerts/day  │    │processes   │    │breach cost │       │
│  └────────────┘    └────────────┘    └────────────┘       │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Cards glow on hover
- Icons are large and colorful
- Glass effect on cards

---

### Solution Section

```
┌────────────────────────────────────────────────────────────┐
│          Our AI-Powered Solution                            │
│                                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  │
│  │⚡    │  │🌐    │  │📈    │  │🛡️    │                  │
│  │Auto  │  │Tool  │  │AI    │  │Risk  │                  │
│  │Play  │  │Orch  │  │Triage│  │Prior │                  │
│  │books │  │      │  │      │  │      │                  │
│  └──────┘  └──────┘  └──────┘  └──────┘                  │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Gradient circles behind icons
- Icons scale on hover
- Smooth color transitions

---

## 📊 Dashboard Preview

Navigate to `http://localhost:3000/app` to see:

### Top Navigation Bar
```
┌────────────────────────────────────────────────────────────┐
│ [≡] [🔍 Search alerts, playbooks...]     [🔔] [👤 Analyst]│
└────────────────────────────────────────────────────────────┘
```

### Sidebar (Left)
```
┌─────────────┐
│🛡️ SecureOps │
├─────────────┤
│▶ Dashboard  │ (highlighted)
│  Alerts     │
│  Playbooks  │
│  Invest...  │
│  Audit Logs │
│  Settings   │
├─────────────┤
│● All Online │
└─────────────┘
```

### Main Dashboard Area
```
┌────────────────────────────────────────────────────────────┐
│  Security Operations Center              ● Live Monitoring │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │⚠️ 1247   │ │✓ 1089    │ │⏰ 4.2min │ │💰 $247K  │     │
│  │Total     │ │Resolved  │ │Avg Resp  │ │Cost Save │     │
│  │Alerts    │ │Incidents │ │Time      │ │          │     │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
│                                                              │
│  ┌─────────────────────────────┐ ┌────────────────┐       │
│  │ Response Time Chart         │ │ Alert Type     │       │
│  │ (Line graph - 24h data)     │ │ Distribution   │       │
│  │                             │ │ (Donut chart)  │       │
│  │    /\    /\                 │ │                │       │
│  │   /  \  /  \                │ │     ●●●        │       │
│  │  /    \/    \               │ │    ●   ●       │       │
│  │ /            \              │ │   ●     ●      │       │
│  └─────────────────────────────┘ └────────────────┘       │
│                                                              │
│  Recent Critical Alerts                                     │
│  ┌──────────────────────────────────────────────────┐     │
│  │ ALT-001 | Firewall | 🔴CRITICAL | 2 min ago      │     │
│  │ ALT-002 | EDR      | 🟣HIGH     | 15 min ago     │     │
│  │ ALT-003 | SIEM     | 🟡MEDIUM   | 23 min ago     │     │
│  └──────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Glass cards with blur
- Charts animate on load
- Pulse effects on badges
- Hover highlights on rows

---

## 🚨 Alerts Page Preview

Navigate to `/app/alerts`:

```
┌────────────────────────────────────────────────────────────┐
│  Alert Management                        Active Alerts: 8   │
│                                                              │
│  [🔍 Search...]  [All] [Critical] [High] [Medium] [Low]    │
│                                                              │
│  ┌──────┬────────┬────────┬──────────┬────────┬──────┐    │
│  │ID    │Type    │Source  │Severity  │Status  │Actions│    │
│  ├──────┼────────┼────────┼──────────┼────────┼──────┤    │
│  │ALT-01│Unauth  │Firewall│🔴CRITICAL│Invest  │🔍⚡⬆✖│    │
│  │ALT-02│Malware │EDR     │🟣HIGH    │Resolved│🔍⚡⬆✖│    │
│  │ALT-03│Phishing│SIEM    │🟡MEDIUM  │Pending │🔍⚡⬆✖│    │
│  └──────┴────────┴────────┴──────────┴────────┴──────┘    │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Severity badges are color-coded
- Status pills have matching colors
- Action buttons have hover tooltips
- Rows highlight on hover

---

## 📚 Playbooks Page Preview

Navigate to `/app/playbooks`:

```
┌────────────────────────────────────────────────────────────┐
│  Playbook Automation                  [+ Create New]        │
│                                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │127   │ │96%   │ │6     │ │45h   │                      │
│  │Exec  │ │Success│ │Total │ │Saved │                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
│                                                              │
│  [All] [Email] [Malware] [Access] [DLP] [Network] [User]   │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │──(blue)────│  │──(red)─────│  │──(green)───│           │
│  │📦         │  │📦         │  │📦         │           │
│  │Phishing   │  │Ransomware │  │Unauth     │           │
│  │Response   │  │Containment│  │Access     │           │
│  │           │  │           │  │Block      │           │
│  │98% | 12   │  │95% | 18   │  │99% | 8    │           │
│  │Steps      │  │Steps      │  │Steps      │           │
│  │           │  │           │  │           │           │
│  │[▶ Run]    │  │[▶ Run]    │  │[▶ Run]    │           │
│  └────────────┘  └────────────┘  └────────────┘           │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Color stripe at top of each card
- Gradient icon badges
- Run button glows on hover
- Success rate meters

---

## 🔍 Investigation Page Preview

Navigate to `/app/investigation`:

```
┌────────────────────────────────────────────────────────────┐
│  Investigation Center               🔴CRITICAL | INV-001    │
│                                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │⚠️    │ │⏰    │ │🛡️    │ │🧠    │                      │
│  │ALT-01│ │10:23 │ │Active│ │94%   │                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
│                                                              │
│  ▼ Evidence Log                                             │
│  ┌────────────────────────────────────────────────┐        │
│  │ 10:23:15 | Network | Suspicious connection     │        │
│  │ 10:23:18 | Auth    | Failed login attempts     │        │
│  │ 10:23:25 | Firewall| Blocked malicious IP      │        │
│  └────────────────────────────────────────────────┘        │
│                                                              │
│  ▼ IP Intelligence                                          │
│  ┌────────────────────────────────────────────────┐        │
│  │ IP: 192.168.1.45                               │        │
│  │ Threat Score: [████████████████░░] 85/100      │        │
│  │ Known Malicious: YES                           │        │
│  └────────────────────────────────────────────────┘        │
│                                                              │
│  ▼ AI-Powered Analysis (Purple border)                     │
│  ┌────────────────────────────────────────────────┐        │
│  │ Confidence: 94%                                │        │
│  │ Immediate containment required...              │        │
│  │ 1. Reset user credentials                      │        │
│  │ 2. Isolate affected system                     │        │
│  │ [Execute Recommended Actions]                  │        │
│  └────────────────────────────────────────────────┘        │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Collapsible sections with chevrons
- Timeline with gradient line
- Purple glow on AI section
- Progress bar for threat score

---

## 📜 Audit Logs Page Preview

Navigate to `/app/audit`:

```
┌────────────────────────────────────────────────────────────┐
│  Audit Logs                             [⬇ Export Logs]    │
│                                                              │
│  [🔍 Search...]  [All] [Success] [Progress] [Escalated]    │
│                                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │6     │ │4     │ │1     │ │1     │                      │
│  │Total │ │Success│ │Active│ │Escal │                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
│                                                              │
│  ┌────────┬───────────┬──────────┬────────┬──────┐        │
│  │Time    │Action     │Playbook  │User    │Status│        │
│  ├────────┼───────────┼──────────┼────────┼──────┤        │
│  │10:25:30│Executed   │Block IP  │System  │✓     │        │
│  │10:10:15│Auto-Solved│Phishing  │AI      │✓     │        │
│  │09:55:42│Invest.    │N/A       │analyst │⏰    │        │
│  └────────┴───────────┴──────────┴────────┴──────┘        │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Status badges color-coded
- Row hover highlights
- Timestamps in monospace
- Real-time updates ready

---

## ⚙️ Settings Page Preview

Navigate to `/app/settings`:

```
┌────────────────────────────────────────────────────────────┐
│  Settings                                                    │
│                                                              │
│  🔗 Security Tool Integrations                              │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │🔍         │  │🛡️         │  │🔥         │           │
│  │Splunk     │  │CrowdStrike│  │Palo Alto  │           │
│  │✓Connected │  │✓Connected │  │✓Connected │           │
│  │           │  │           │  │           │           │
│  │[Endpoint] │  │[Endpoint] │  │[Endpoint] │           │
│  │[API Key]  │  │[API Key]  │  │[API Key]  │           │
│  │[Update]   │  │[Update]   │  │[Update]   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
│                                                              │
│  ⚙️ System Preferences                                      │
│  ┌──────────────────────────┐ ┌──────────────────────┐    │
│  │Auto-Response    [ON ]    │ │Critical Alerts [ON ]│    │
│  │AI Triage        [ON ]    │ │Playbook Exec   [ON ]│    │
│  │Real-time Monitor[ON ]    │ │Email Reports   [OFF]│    │
│  └──────────────────────────┘ └──────────────────────┘    │
│                                                              │
│                              [💾 Save All Settings]         │
└────────────────────────────────────────────────────────────┘
```

**Visual Effects:**
- Integration cards with status
- Toggle switches animated
- Form inputs with focus states
- Save button prominent

---

## 🎨 Color Scheme in Action

Throughout all pages, you'll see:

**Primary Colors:**
- 🔵 Cyan Blue (#00FFFF) - Buttons, borders, links
- 🟢 Neon Green (#39FF14) - Success states, positive metrics
- 🟣 Purple (#8A2BE2) - Secondary actions, AI features
- 🔴 Red (#FF0040) - Critical alerts, warnings

**Background:**
- ⚫ Dark (#0A0F1F) - Main background
- ⚫ Darker (#050A14) - Sidebar, navbar

**Effects:**
- Glassmorphism on all cards
- Neon glow on hover
- Gradient text on headings
- Pulse animations on live indicators

---

## 🎭 Interactive Elements

### Hover States
- **Buttons:** Glow + scale up
- **Cards:** Border brightens, background lightens
- **Table rows:** Background highlights
- **Icons:** Color brightens

### Active States
- **Navigation:** Gradient background + blue border
- **Filters:** Solid blue background
- **Toggles:** Slides with smooth transition

### Loading States
- **Spinner:** Rotating Activity icon
- **Text:** "Loading..." message
- **Centered:** Middle of content area

---

## 📱 Mobile View Preview

On screens < 768px:

```
┌────────────┐
│[≡] 🛡️ SOC  │
├────────────┤
│            │
│  [Stats]   │
│  [Cards]   │
│  [Stack]   │
│  [Vertical]│
│            │
└────────────┘
```

**Changes:**
- Hamburger menu appears
- Sidebar overlays on open
- Single column layouts
- Stacked cards
- Horizontal scroll on tables

---

## 🌟 Special Effects to Notice

1. **Page Load Animations**
   - Content slides up from bottom
   - Fade in effect (0.6s)

2. **Background Orbs**
   - Three glowing circles float
   - Pulse at different intervals
   - Blur effect (blur-3xl)

3. **Card Glow**
   - Hover adds shadow
   - Border brightens
   - Smooth 300ms transition

4. **Status Indicators**
   - Pulse animation on live status
   - Color-coded severity
   - Icon animations

5. **Charts**
   - Animate on load
   - Interactive tooltips
   - Responsive to data

---

## 🎯 What to Test

When exploring the application:

1. **Navigation**
   - Click through all sidebar links
   - Test mobile menu toggle
   - Try search bar

2. **Interactions**
   - Hover over cards and buttons
   - Click action buttons on alerts
   - Run a playbook
   - Expand/collapse investigation sections

3. **Filters**
   - Try alert severity filters
   - Use playbook category filters
   - Search in audit logs

4. **Responsiveness**
   - Resize browser window
   - Test on mobile (DevTools)
   - Check tablet view

5. **Charts**
   - Hover over data points
   - Check tooltips
   - Verify responsive sizing

---

## 💡 Visual Tips

- **Dark Theme:** Entire app uses dark mode
- **Contrast:** High contrast for readability
- **Spacing:** Generous padding and gaps
- **Icons:** Consistent Lucide React icons
- **Typography:** Clear hierarchy (Orbitron + Inter)
- **Gradients:** Subtle, not overwhelming
- **Animations:** Smooth, not distracting

---

**Open http://localhost:3000 now to see it all in action! 🚀**

The live application will be much more impressive than these ASCII previews!
