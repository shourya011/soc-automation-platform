import { NavLink } from 'react-router-dom';
import { LayoutDashboard, AlertTriangle, Layers, Search, FileText, Settings, Shield, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { path: '/app', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { path: '/app/alerts', icon: AlertTriangle, label: 'Alerts' },
    { path: '/app/playbooks', icon: Layers, label: 'Playbooks' },
    { path: '/app/investigation', icon: Search, label: 'Investigation' },
    { path: '/app/audit', icon: FileText, label: 'Audit Logs' },
    { path: '/app/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-white dark:bg-cyber-darker border-r border-gray-200 dark:border-white dark:border-opacity-10
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-white dark:border-opacity-10">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-cyber-blue mr-3" />
            <span className="text-xl font-orbitron font-bold gradient-text">SecureOps</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `
                flex items-center px-4 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 text-cyber-blue dark:from-cyber-blue/20 dark:to-cyber-purple/20 dark:text-white border-l-4 border-cyber-blue' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-5'
                }
              `}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-white dark:border-opacity-10">
          <div className="glass-card p-4 text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">System Status</div>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-cyber-green font-semibold">All Systems Operational</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
