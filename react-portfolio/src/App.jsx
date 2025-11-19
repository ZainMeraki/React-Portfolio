import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Github, Mail, Linkedin } from 'lucide-react'; // Make sure to import your icons
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-linear-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Navigation Bar */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/portfolio" element={<Portfolio isDark={isDark} />} />
        </Routes>

        {/* Footer */}
        <footer className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t mt-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  UkiyoMeraki
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Building digital experiences with passion and purpose
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                {/* FIXED: Added opening <a> tags here */}
                <a 
                  href="https://github.com/ZainMeraki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                
                <a 
                  href="mailto:pandaken.zain@gmail.com"
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/zain-arif-1606931a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className={`text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                © {new Date().getFullYear()} Zain Meraki. Crafted using React & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;