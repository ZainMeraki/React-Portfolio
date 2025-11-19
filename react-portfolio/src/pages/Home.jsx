import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Rocket, Star, ArrowRight, Github, Zap, Palette } from 'lucide-react';

const Home = ({ isDark }) => {
  return (
    <div className={`min-h-screen ${isDark ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-linear-to-br from-gray-50 via-white to-gray-100'}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-2xl">👋</span>
            <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              Welcome to my digital space
            </span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">UkiyoMeraki</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Full-Stack Developer crafting elegant solutions to complex problems
          </p>
          
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto`}>
            Passionate about building responsive, user-centric web applications with modern technologies. 
            I transform ideas into interactive digital experiences.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              to="/portfolio"
              className="group px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/about"
              className={`px-8 py-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' : 'bg-white hover:bg-gray-50 border-gray-200'} border-2 ${isDark ? 'text-white' : 'text-gray-900'} font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
            >
              About Me
            </Link>
            
            {/* FIX: Added the opening <a> tag here */}
            <a
              href="https://github.com/ZainMeraki"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} ${isDark ? 'text-white' : 'text-gray-900'} font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2`}
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
            <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-lg p-4 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">
                11+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Projects Completed
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-lg p-4 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">
                9+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Technologies
              </div>
            </div>
            <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-lg p-4 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">
                100%
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Commitment
              </div>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mt-32 mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What I Bring to the Table
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Combining technical expertise with creative problem-solving to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={32} />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Clean Code Architecture
              </h3>
              <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Writing semantic, maintainable, and scalable code following industry best practices. 
                Every line is crafted with purpose, ensuring long-term sustainability and easy collaboration.
              </p>
            </div>

            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Rocket className="text-white" size={32} />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Performance Optimization
              </h3>
              <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Building lightning-fast applications with optimized load times and smooth interactions. 
                I prioritize performance without sacrificing functionality or user experience.
              </p>
            </div>

            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-linear-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Star className="text-white" size={32} />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                User-Centered Design
              </h3>
              <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Creating intuitive interfaces that users love. Accessibility, responsiveness, and 
                delightful interactions are at the core of every project I build.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-20">
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-2xl p-12 shadow-xl`}>
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Technologies I Work With
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Constantly learning and adapting to new tools and frameworks
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'SCSS', 'Tailwind CSS', 'Git', 'Responsive Design'].map((tech, index) => (
                <div
                  key={index}
                  className="group px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className={`${isDark ? 'bg-linear-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30' : 'bg-linear-to-r from-blue-50 to-purple-50 border-blue-200'} border-2 rounded-2xl p-12 shadow-xl`}>
            <Zap className={`mx-auto mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={48} />
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to See My Work?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore my portfolio to see real-world projects showcasing my skills in action. 
              From responsive layouts to complex JavaScript logic, each project tells a story.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Palette size={20} />
              View Portfolio
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;