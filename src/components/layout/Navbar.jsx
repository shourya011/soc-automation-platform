import { useState } from 'react';
import { Search, Bell, User, Menu, ChevronDown } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="h-16 bg-cyber-darker border-b border-white border-opacity-10 flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center flex-1">
        <button
          onClick={toggleSidebar}
          className="lg:hidden mr-4 text-gray-400 hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search alerts, playbooks, investigations..."
            className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue transition-colors"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-red rounded-full animate-pulse"></span>
        </button>

        {/* Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-semibold text-white">SOC Analyst</div>
              <div className="text-xs text-gray-400">analyst@company.com</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 glass-card border border-white border-opacity-10 rounded-lg shadow-lg z-50">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white hover:bg-opacity-5">Profile Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white hover:bg-opacity-5">Preferences</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white hover:bg-opacity-5">Team Management</a>
                <hr className="my-2 border-white border-opacity-10" />
                <a href="/" className="block px-4 py-2 text-sm text-cyber-red hover:bg-white hover:bg-opacity-5">Sign Out</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
