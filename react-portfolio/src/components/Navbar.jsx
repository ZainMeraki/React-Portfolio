import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Home, User, Briefcase } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} hover:opacity-80 transition-opacity`}>
            UkiyoMeraki
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 md:gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/')
                  ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/about')
                  ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <User size={20} />
              <span className="hidden sm:inline">About</span>
            </Link>

            <Link
              to="/portfolio"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/portfolio')
                  ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Briefcase size={20} />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;