import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, User, Lightbulb, Target, Wrench } from 'lucide-react';

const ProjectPopup = ({ project, isDark, onClose }) => {
  // Prevent background scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Format text with code highlighting
  const formatText = (text) => {
    if (!text) return '';
    return text.replace(/`([^`]+)`/g, '<code class="code-highlight">$1</code>');
  };

  if (!project) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      />

      {/* Popup Container */}
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        <div 
          className={`relative w-full max-w-5xl ${
            isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
          } border-2 rounded-2xl shadow-2xl animate-slideUp max-h-[90vh] overflow-hidden flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Image */}
          <div className="relative h-64 md:h-80 overflow-hidden bg-gray-900">
            <img 
              src={project.screenshot} 
              alt={project.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {project.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techUsed.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Inline styles for code highlighting */}
          <style>{`
            .code-highlight {
              background-color: ${isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)'};
              color: ${isDark ? '#60a5fa' : '#2563eb'};
              padding: 0.125rem 0.375rem;
              border-radius: 0.25rem;
              font-family: 'Courier New', Courier, monospace;
              font-size: 0.875em;
              font-weight: 600;
              border: 1px solid ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.25)'};
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { 
                opacity: 0;
                transform: translateY(50px) scale(0.95);
              }
              to { 
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
            }
            .animate-slideUp {
              animation: slideUp 0.3s ease-out;
            }
          `}</style>

          {/* Scrollable Content */}
          <div className={`flex-1 overflow-y-auto p-6 md:p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            
            {/* Quick Links Section */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* FIXED: Added opening <a> tag here */}
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Github size={20} />
                View on GitHub
                <ExternalLink size={16} />
              </a>
              
              {/* Optional Live Demo Link - commented out as in original
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                <ExternalLink size={20} />
                Live Demo
              </a> 
              */}
            </div>

            {/* Project Details Grid */}
            <div className="space-y-6">
              {/* What It Does */}
              <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    What It Does
                  </h3>
                </div>
                <p 
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}
                  dangerouslySetInnerHTML={{ __html: formatText(project.writeUp.whatItDoes) }}
                />
              </div>

              {/* What I Learned */}
              <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-linear-to-br from-purple-500 to-purple-600 rounded-lg">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    What I Learned
                  </h3>
                </div>
                <p 
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}
                  dangerouslySetInnerHTML={{ __html: formatText(project.writeUp.whatILearned) }}
                />
              </div>

              {/* My Role (if exists) */}
              {project.writeUp.myRole && (
                <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-linear-to-br from-green-500 to-green-600 rounded-lg">
                      <User className="text-white" size={24} />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      My Role
                    </h3>
                  </div>
                  <p 
                    className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}
                    dangerouslySetInnerHTML={{ __html: formatText(project.writeUp.myRole) }}
                  />
                </div>
              )}

              {/* Challenges Solved */}
              <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg">
                    <Wrench className="text-white" size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Challenges Solved
                  </h3>
                </div>
                <p 
                  className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}
                  dangerouslySetInnerHTML={{ __html: formatText(project.writeUp.challengesSolved) }}
                />
              </div>

              {/* Technologies Used - Expanded View */}
              <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-xl p-6`}>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techUsed.map((tech, index) => (
                    <div
                      key={index}
                      className={`px-5 py-3 ${isDark ? 'bg-gray-700' : 'bg-white'} border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded-lg font-semibold text-lg hover:scale-105 transition-transform cursor-default shadow-sm`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-t px-6 md:px-8 py-4 flex justify-between items-center`}>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Press <kbd className={`px-2 py-1 ${isDark ? 'bg-gray-700' : 'bg-white'} border ${isDark ? 'border-gray-600' : 'border-gray-300'} rounded text-xs font-mono`}>ESC</kbd> to close
            </p>
            <button
              onClick={onClose}
              className={`px-6 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${isDark ? 'text-white' : 'text-gray-900'} font-semibold rounded-lg transition-all duration-200`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPopup;