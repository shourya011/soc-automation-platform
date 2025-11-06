# 🌓 Dark Mode Feature Documentation

## Overview
Your SOC Automation Platform now has a **fully functional dark mode toggle** that allows users to switch between light and dark themes seamlessly!

---

## ✨ Features Implemented

### 1. **Theme Context & State Management**
- Created `ThemeContext.jsx` to manage global theme state
- Persists user preference in `localStorage`
- Automatically applies theme on page load
- Uses React Context API for global access

### 2. **Theme Toggle Button Component**
- Moon icon for light mode
- Sun icon for dark mode
- Smooth transitions with hover effects
- Positioned in the Navbar for easy access

### 3. **Tailwind Dark Mode Configuration**
- Enabled `class` based dark mode in `tailwind.config.js`
- Added both light and dark color palettes
- Supports manual class toggle on `<html>` element

### 4. **Comprehensive Styling Updates**
All components updated with dark mode classes:
- ✅ Body background and text colors
- ✅ Sidebar (background, borders, nav items)
- ✅ Navbar (search bar, buttons, dropdown)
- ✅ Cards and glassmorphism effects
- ✅ Buttons (primary and secondary)
- ✅ Dashboard KPI cards
- ✅ Charts and visualizations
- ✅ Scrollbars
- ✅ Gradient text

---

## 🎨 Color Palettes

### **Dark Mode Colors:**
```javascript
'cyber-dark': '#0A0F1F',      // Background
'cyber-darker': '#050A14',     // Sidebar/Navbar
'cyber-blue': '#00FFFF',       // Primary accent
'cyber-green': '#39FF14',      // Success/online
'cyber-purple': '#8A2BE2',     // Secondary accent
'cyber-pink': '#FF00FF',       // Highlights
'cyber-red': '#FF0040',        // Alerts/danger
```

### **Light Mode Colors:**
```javascript
'light-bg': '#F5F5F7',         // Background
'light-card': '#FFFFFF',       // Cards
'light-blue': '#00D9FF',       // Primary accent
'light-purple': '#A855F7',     // Secondary accent
'light-pink': '#FF6B9D',       // Highlights
'light-green': '#00E5A0',      // Success
```

---

## 🚀 How It Works

### **1. Theme Provider Wrapper**
```jsx
// App.jsx
<ThemeProvider>
  <Router>
    {/* Your app routes */}
  </Router>
</ThemeProvider>
```

### **2. Theme Hook Usage**
```jsx
import { useTheme } from './context/ThemeContext';

const MyComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};
```

### **3. Tailwind Dark Classes**
```jsx
<div className="bg-white dark:bg-cyber-darker text-gray-900 dark:text-white">
  Content adapts to theme
</div>
```

---

## 📱 Component Updates

### **Navbar**
- Theme toggle button added (Moon/Sun icon)
- Search bar adapts colors
- Notification bell adapts colors
- Profile dropdown adapts background

### **Sidebar**
- Background: White → Dark
- Text: Dark gray → Light gray
- Active state: Light blue → Neon blue
- Borders: Gray → White with opacity

### **Dashboard**
- Headers: Dark text → White text
- KPI cards: Light background → Dark glass
- Card values: Dark gray → White
- Chart backgrounds adapt
- Tooltip colors change

### **Buttons**
- Primary: Light gradient → Neon gradient
- Secondary: Gray border → Cyan border
- Hover effects maintained in both modes

---

## 🎯 Usage Instructions

### **For Users:**
1. Click the **Moon icon** (☾) in the navbar to enable dark mode
2. Click the **Sun icon** (☀) in the navbar to return to light mode
3. Your preference is automatically saved

### **For Developers:**

**Adding dark mode to a new component:**
```jsx
<div className="
  bg-white dark:bg-cyber-dark 
  text-gray-900 dark:text-white
  border-gray-200 dark:border-white/10
">
  Your content
</div>
```

**Using theme in JavaScript:**
```jsx
import { useTheme } from './context/ThemeContext';

const MyComponent = () => {
  const { isDarkMode } = useTheme();
  
  // Conditional logic based on theme
  const chartColor = isDarkMode ? '#00FFFF' : '#00D9FF';
  
  return <Chart color={chartColor} />;
};
```

---

## 🔧 Customization

### **Change Default Theme**
Edit `ThemeContext.jsx`:
```javascript
const [isDarkMode, setIsDarkMode] = useState(() => {
  const saved = localStorage.getItem('theme');
  return saved ? saved === 'dark' : false; // Change to false for light default
});
```

### **Add Custom Dark Mode Colors**
Edit `tailwind.config.js`:
```javascript
colors: {
  'my-dark-color': '#123456',
},
```

Then use:
```jsx
<div className="bg-my-dark-color dark:bg-my-other-color">
```

### **Modify Toggle Button Style**
Edit `ThemeToggle.jsx` to change icon size, colors, or position.

---

## 🎨 CSS Classes Reference

### **Common Dark Mode Patterns:**

| Light Mode | Dark Mode |
|------------|-----------|
| `bg-white` | `dark:bg-cyber-dark` |
| `bg-gray-50` | `dark:bg-white/5` |
| `text-gray-900` | `dark:text-white` |
| `text-gray-600` | `dark:text-gray-400` |
| `border-gray-200` | `dark:border-white/10` |
| `hover:bg-gray-100` | `dark:hover:bg-white/5` |

---

## ⚡ Performance

- **Instant Toggle**: No page reload required
- **Persistent**: Theme choice saved to `localStorage`
- **Smooth Transitions**: 300ms CSS transitions
- **Zero Flash**: Theme applied before render

---

## 🐛 Troubleshooting

**Theme not persisting?**
- Check browser localStorage is enabled
- Clear localStorage: `localStorage.removeItem('theme')`

**Colors not changing?**
- Ensure `dark:` classes are added to elements
- Check `darkMode: 'class'` in `tailwind.config.js`
- Verify `<html>` has `dark` class when in dark mode

**Toggle not working?**
- Ensure `ThemeProvider` wraps your app
- Check `useTheme()` hook is used inside `ThemeProvider`

---

## 📊 Feature Checklist

✅ Theme Context with localStorage persistence  
✅ Toggle button in Navbar  
✅ Dark mode classes on all major components  
✅ Sidebar color transitions  
✅ Navbar color transitions  
✅ Dashboard adaptations  
✅ Card and button styles  
✅ Chart color adaptations  
✅ Scrollbar theming  
✅ Smooth CSS transitions  
✅ Moon/Sun icons  

---

## 🌟 Future Enhancements

Potential additions:
- [ ] Auto dark mode (system preference detection)
- [ ] Custom color picker
- [ ] Multiple theme presets (blue, purple, green)
- [ ] Scheduled theme switching (auto at night)
- [ ] Theme preview before applying
- [ ] Accessibility contrast checker

---

## 🎉 Demo

**To see dark mode in action:**
1. Open your app at http://localhost:3002
2. Look for the Moon/Sun icon in the top-right navbar
3. Click to toggle between themes
4. Navigate through pages to see consistent theming
5. Refresh the page - your choice is remembered!

---

**Your SOC platform now supports both professional light and cyberpunk dark themes!** 🚀

Perfect for users who prefer different viewing modes throughout the day!
