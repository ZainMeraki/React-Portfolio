import React from 'react';
import { Github, Mail, Linkedin, Download, ExternalLink, MapPin, Code2, Heart, Coffee } from 'lucide-react';
import profile from '../assets/profile.png';

const About = ({ isDark }) => {
  // Define text/icon color based on dark mode status
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const linkBg = isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300';
  const skillBg = isDark ? 'bg-gray-700' : 'bg-gray-100';

  return (
    <div className={`min-h-screen font-inter ${isDark ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-linear-to-br from-gray-50 via-white to-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header with Photo */}
        <div className={`${cardBg} border rounded-2xl p-8 md:p-12 shadow-xl mb-12`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Profile Photo Section */}
            <div className="shrink-0">
              <div className="relative group">
                {/* Profile Photo */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 p-1 shadow-2xl">
                  <div className={`w-full h-full rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-center overflow-hidden`}>
                    {/* IMAGE REPLACEMENT HERE */}
                    <img 
                      src={profile} 
                      alt="Zain Meraki" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-linear-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              </div>

              {/* Location Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                <MapPin size={16} className="text-blue-500" />
                <span className={subtextColor}>
                  Based Worldwide 🌍
                </span>
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex-1">
              <div className="mb-4">
                <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${textColor}`}>
                  Zain Meraki
                </h1>
                <p className="text-xl text-transparent bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text font-semibold mb-2">
                  @UkiyoMeraki
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-400">
                    Full-Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-400">
                    Open to Opportunities
                  </span>
                </div>
              </div>

              <div className={`space-y-4 ${subtextColor} leading-relaxed text-lg`}>
                <p>
                  Hey there! I'm <span className="font-semibold text-blue-500">Zain</span>, but you might know me online as 
                  <span className="font-semibold text-purple-500"> UkiyoMeraki</span>. I'm a passionate web developer 
                  who loves turning complex problems into elegant, user-friendly solutions.
                </p>
                <p>
                  The name "Ukiyo" (浮世) represents "the floating world" – a philosophy of living in the moment and 
                  finding beauty in fleeting experiences. Combined with "Meraki" (μεράκι) – doing something with soul, 
                  creativity, and love – it perfectly captures my approach to development: <span className="italic">crafting 
                  experiences with passion and presence</span>.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap gap-3 mt-6">
                
                <a 
                  href="https://github.com/ZainMeraki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 ${linkBg} rounded-lg transition-all duration-200 hover:scale-105 shadow-md ${subtextColor}`}
                >
                  <Github size={18} />
                  <span className="font-medium">GitHub</span>
                  <ExternalLink size={14} />
                </a>
                
                <a 
                  href="mailto:pandaken.zain@gmail.com"
                  className={`flex items-center gap-2 px-4 py-2 ${linkBg} rounded-lg transition-all duration-200 hover:scale-105 shadow-md ${subtextColor}`}
                >
                  <Mail size={18} />
                  <span className="font-medium">Email</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/zain-arif-1606931a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 ${linkBg} rounded-lg transition-all duration-200 hover:scale-105 shadow-md ${subtextColor}`}
                >
                  <Linkedin size={18} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* My Journey Section */}
        <div className={`${cardBg} border rounded-2xl p-8 shadow-lg mb-8`}>
          <h2 className={`text-3xl font-bold mb-6 ${textColor} flex items-center gap-3`}>
            <Code2 className="text-blue-500" size={32} />
            My Development Journey
          </h2>
          <div className={`space-y-4 ${subtextColor} leading-relaxed`}>
            <p>
              My journey into web development started with curiosity and a desire to create. What began as 
              tinkering with HTML and CSS quickly evolved into a deep passion for building complete, 
              functional web applications.
            </p>
            <p>
              I've worked extensively with <span className="font-semibold text-blue-500">HTML5, CSS3, and JavaScript</span>, 
              building a solid foundation before diving into modern frameworks like <span className="font-semibold text-blue-500">React</span>. 
              Along the way, I've mastered tools like <span className="font-semibold text-purple-500">SCSS, Bootstrap, and Tailwind CSS</span> to 
              create responsive, visually stunning interfaces.
            </p>
            <p>
              Every project is an opportunity to learn something new. From implementing complex algorithms 
              (like my number-to-words converter) to recreating pixel-perfect Figma designs, I approach each 
              challenge with enthusiasm and a commitment to excellence.
            </p>
            <p>
              Currently, I'm expanding my skills into backend technologies and database management, working 
              toward becoming a truly full-stack developer capable of building end-to-end solutions.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className={`${cardBg} border rounded-2xl p-8 shadow-lg mb-8`}>
          <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
            Technical Skills & Expertise
          </h2>
          
          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'SCSS/Sass', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'].map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 ${skillBg} rounded-lg text-center font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${subtextColor}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Workflow */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                Tools & Workflow
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Git & GitHub', 'Figma to Code', 'VS Code', 'npm/package management', 'Chrome DevTools', 'Responsive Testing', 'Version Control', 'Agile Methodology'].map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 ${skillBg} rounded-lg text-center font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${subtextColor}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Problem Solving', 'Clean Code', 'UI/UX Principles', 'Debugging', 'Documentation', 'Performance Optimization', 'Cross-browser Testing', 'Accessibility (a11y)'].map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 ${skillBg} rounded-lg text-center font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${subtextColor}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What Drives Me */}
        <div className={`${cardBg} border rounded-2xl p-8 shadow-lg mb-8`}>
          <h2 className={`text-3xl font-bold mb-6 ${textColor} flex items-center gap-3`}>
            <Heart className="text-red-500" size={32} />
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-6 ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl`}>
              <div className="text-3xl mb-3">🎨</div>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                Design Aesthetics
              </h3>
              <p className={subtextColor}>
                I believe beautiful design and functionality go hand-in-hand. Every pixel matters.
              </p>
            </div>
            <div className={`p-6 ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl`}>
              <div className="text-3xl mb-3">🧩</div>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                Problem Solving
              </h3>
              <p className={subtextColor}>
                I thrive on challenges that push me to think creatively and find elegant solutions.
              </p>
            </div>
            <div className={`p-6 ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-xl`}>
              <div className="text-3xl mb-3">📚</div>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                Continuous Learning
              </h3>
              <p className={subtextColor}>
                Technology evolves rapidly, and I'm committed to staying current and expanding my skillset.
              </p>
            </div>
          </div>
        </div>

        {/* Beyond Code */}
        <div className={`${cardBg} border rounded-2xl p-8 shadow-lg mb-8`}>
          <h2 className={`text-3xl font-bold mb-6 ${textColor} flex items-center gap-3`}>
            <Coffee className="text-orange-500" size={32} />
            Beyond the Code
          </h2>
          <div className={`space-y-4 ${subtextColor} leading-relaxed`}>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or diving deep into design trends and UI/UX principles. I'm fascinated by the intersection of 
              technology and human experience.
            </p>
            <p>
              I'm also passionate about knowledge sharing – whether it's documenting my learning journey, 
              helping fellow developers troubleshoot issues, or creating tutorials that make complex concepts accessible.
            </p>
            <p>
              My philosophy? <span className="font-semibold italic text-blue-500">Write code that humans can read, 
              build interfaces that feel natural, and never stop learning</span>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${isDark ? 'bg-linear-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30' : 'bg-linear-to-r from-blue-50 to-purple-50 border-blue-200'} border-2 rounded-2xl p-12 text-center shadow-xl`}>
          <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
            Let's Build Something Amazing Together
          </h2>
          <p className={`text-lg mb-8 ${subtextColor} max-w-2xl mx-auto`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Whether you have a question or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            
            <a 
              href="mailto:pandaken.zain@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
            
            <a 
              href="https://github.com/ZainMeraki"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} ${isDark ? 'text-white' : 'text-gray-900'} font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 ${isDark ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <Github size={20} />
              View My GitHub
            </a>
          </div>

          {/* Download Resume Option */}
          <div className="mt-8">
            <button
              className={`inline-flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'} border rounded-lg font-medium transition-all duration-200 ${subtextColor}`}
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;