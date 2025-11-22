import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

const ProjectCard = ({ name, screenshot, githubRepo, techUsed, writeUp, isDark, onViewDetails }) => {
  // Format text with code highlighting
  const formatText = (text) => {
    if (!text) return '';
    return text.replace(/`([^`]+)`/g, '<code class="code-highlight">$1</code>');
  };

  return (
    <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border`}>
      {/* Screenshot */}
      <div className="relative h-48 sm:h-56 md:h-48 lg:h-52 bg-gray-900 overflow-hidden group cursor-pointer" onClick={onViewDetails}>
        <img 
          src={screenshot} 
          alt={`${name} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
        
        {/* Hover Overlay with "View Details" */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <Eye className="text-white mx-auto mb-2" size={40} />
            <p className="text-white font-semibold text-lg">View Details</p>
          </div>
        </div>
        
        {/* Floating Tech Count Badge */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-xs font-semibold">{techUsed.length} Technologies</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Project Name */}
        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techUsed.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              {tech}
            </span>
          ))}
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
        `}</style>

        {/* Write-up Section - Truncated Preview */}
        <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          <div>
            <p className="font-semibold text-blue-500 mb-1">What it does:</p>
            <p 
              className="leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ __html: formatText(writeUp.whatItDoes) }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onViewDetails}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Eye size={18} />
            View Details
          </button>
          <a 
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`px-4 py-3 ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-200 hover:bg-gray-300'
            } ${isDark ? 'text-white' : 'text-gray-900'} font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center`}
            title="View on GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;