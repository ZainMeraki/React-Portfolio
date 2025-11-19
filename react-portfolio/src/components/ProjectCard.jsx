import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ name, screenshot, githubRepo, techUsed, writeUp, isDark }) => {
  // Function to convert backticks to <code> tags
  const formatText = (text) => {
    if (!text) return '';
    
    // Replace backticks with <code> tags
    return text.replace(/`([^`]+)`/g, '<code class="code-highlight">$1</code>');
  };

  return (
    <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border`}>
      {/* Screenshot */}
      <div className="relative h-48 sm:h-56 md:h-48 lg:h-52 bg-gray-900 overflow-hidden group">
        <img 
          src={screenshot} 
          alt={`${name} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
        
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

        {/* Write-up Section with inline styles for code blocks */}
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

        <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          <div>
            <p className="font-semibold text-blue-500 mb-1">What it does:</p>
            <p 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatText(writeUp.whatItDoes) }}
            />
          </div>

          <div>
            <p className="font-semibold text-purple-500 mb-1">What I learned:</p>
            <p 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatText(writeUp.whatILearned) }}
            />
          </div>

          {writeUp.myRole && (
            <div>
              <p className="font-semibold text-green-500 mb-1">My role:</p>
              <p 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatText(writeUp.myRole) }}
              />
            </div>
          )}

          <div>
            <p className="font-semibold text-orange-500 mb-1">Challenges solved:</p>
            <p 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatText(writeUp.challengesSolved) }}
            />
          </div>
        </div>

        {/* GitHub Link Button */}
        <a 
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 ${
            isDark 
              ? 'bg-linear-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500' 
              : 'bg-linear-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
          } text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg`}
        >
          <Github size={20} />
          View on GitHub
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;