import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Eye, EyeOff } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

// Import your images
import num2Word from '../assets/Num2Word.png';
import codeDiary from '../assets/Code-Diary.png';
import bhromaon from '../assets/BHROMAON.png';
import mgContact from '../assets/MG-Contact.png';
import japan from '../assets/Japan.png';
import genesis from '../assets/Genesis.png';
import atmSytem from '../assets/ATM-System.png';
import bookTracker from '../assets/Book-Tracker.png';
import numberGame from '../assets/Number-Game.png';
import gameZone from '../assets/Bootstrap.png';
import svgAnimation from '../assets/SVGAnimBasics.png';

const Portfolio = ({ isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // ⭐ STATE FOR PREVIEW CHALLENGE
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      name: "Num2Word",
      screenshot: num2Word,
      githubRepo: "https://github.com/ZainMeraki/Num2Word",
      techUsed: ["HTML", "CSS", "Javascript"],
      writeUp: {
        whatItDoes: "A dynamic web utility that instantly converts numerical input into its corresponding word representation (e.g., 1,234,567 becomes 'One Million Two Hundred and Thirty-Four Thousand Five Hundred and Sixty-Seven'). It features a engaging typewriter animation for displaying the output and a unique CSS Live Edit box, allowing users to modify the application's styles in real-time.",
        whatILearned: "I gained practical experience in building and optimizing a complex number-to-words conversion algorithm in native JavaScript to handle numbers up to the quadrillions. I also learned techniques for creating custom CSS animations (like the typewriter effect) and implemented an in-browser code editor using `contenteditable` for live styling previews.",
        myRole: "Solo project showcasing full-stack capabilities with modern frameworks and a focus on vanilla JavaScript for core logic.",
        challengesSolved: "Successfully implemented the recursive number-to-words logic to accurately handle large numbers and correct grammatical connections (like 'Hundred and'). I also ensured full responsiveness across various devices using comprehensive CSS media queries and handled the user interaction flow by disabling the 'Enter' button during the animation to prevent rapid-fire submissions."
      }
    },
    {
      name: "Code Diary",
      screenshot: codeDiary,
      githubRepo: "https://github.com/ZainMeraki/Code-Diary",
      techUsed: ["HTML", "CSS", "Javascript"],
      writeUp: {
        whatItDoes: "A static, single-page application (SPA) acting as a technical reference guide for core web development concepts (HTML, CSS, JavaScript, and Git). It uses a fixed sidebar for navigation and dynamically switches between content sections (CSS, JS, Git) without full page reloads. The application also includes a Dark/Light Mode toggle for improved accessibility and user preference retention.",
        whatILearned: "I reinforced my understanding of CSS structure, including the four methods of including CSS (Inline, Internal, External, and JavaScript). I consolidated the difference between the ID and Class attributes for targeted vs. reusable styling. I also detailed key responsive design principles, such as utilizing relative units (percentages) and min/max constraints to ensure fluid layout across various viewports. Finally, I documented the essential three-step Git workflow (add, commit, push) for version control.",
        myRole: "Solo project, responsible for content organization, structuring the HTML for content modularity (using sections and lists), and curating the comprehensive technical notes for foundational web technologies.",
        challengesSolved: "Successfully organized complex, multi-topic notes into a single, highly readable format using semantic HTML5 elements (sections, ordered/unordered lists, code tables). The design clearly distinguishes between unique element identification (ID) and reusable styling groups (Class). The detailed documentation on Git provides clear analogies and a simplified workflow for version control beginners."
      }
    },
    {
      name: "BHROMAON",
      screenshot: bhromaon,
      githubRepo: "https://github.com/ZainMeraki/BHROHAOM-Figma",
      techUsed: ["HTML", "CSS", "SCSS"],
      writeUp: {
        whatItDoes: "A fully responsive, multi-section landing page for a travel agency, BHROMAON. It accurately recreates a complex Figma design, featuring a full-screen hero section with a search form, a main navigation bar fixed below the hero, detailed content sections (Why Choose Us, Process, Destinations), and a Testimonial section. The site strictly adheres to semantic HTML5 structure and uses Sass for a modular, maintainable, and responsive CSS architecture.",
        whatILearned: "I gained expertise in Sass pre-processing, enforcing modularity and consistency using a BEM-inspired structure with partials and mixins. I mastered Flexbox and precise media queries to ensure the site was fully responsive down to 320px. I also integrated complex design features, including custom SVG path curves, sophisticated CSS pseudo-elements for typography, and comprehensive hover/focus states across all interactive elements to achieve high design fidelity.",
        myRole: "Solo developer, responsible for full recreation of the provided design under a 12-hour deadline. This included HTML semantics, responsive design implementation, Sass architecture setup, and ensuring cross-browser compatibility, focusing on meeting all assignment criteria (valid code, normalize.css, favicon, form validation, and responsiveness).",
        challengesSolved: "Successfully managed high design fidelity and complexity under a tight deadline. Key solutions included: leveraging Sass mixins for a rapid, scalable, and modular codebase; precisely recreating two-part backgrounds using CSS linear gradients; and accurately positioning complex SVG path curves (using negative margins and z-index) to visually connect steps in the Process section."
      }
    },
    {
      name: "MG+ - Contact Page & Nav",
      screenshot: mgContact,
      githubRepo: "https://github.com/MPLarsson/Group-Project",
      techUsed: ["HTML", "CSS"],
      writeUp: {
        whatItDoes: "A collaborative frontend design project for a multi-page website (MG+), themed around a DJ/event booking platform for scheduling and promotion. My focus was delivering two key components: the responsive Global Navigation Bar for site-wide consistency, and the dedicated Contact Us Page, featuring a modern, full-screen CSS-only modal contact form to handle inquiries.",
        whatILearned: "I successfully implemented CSS-only modal logic by utilizing the :target pseudo-selector combined with anchor links to manage the contact form's open/close state without relying on JavaScript. I mastered creating a reusable and responsive Global Navigation Bar using Flexbox for consistent site-wide layout. Furthermore, I integrated advanced form validation styling (using `:valid`, `:invalid`, and `:not(:placeholder-shown)`) to provide immediate, high-contrast user feedback on required fields.",
        myRole: "Group member responsible for: 1) Designing and coding the fully functional, responsive Navigation Bar (ensuring correct links and active state tracking). 2) Designing and coding the complete, responsive Contact Us page, including the contact information section, social media links, and the modal form component.",
        challengesSolved: "The main challenge was creating a complex interactive modal contact form using a CSS-only solution (utilizing the `:target` pseudo-selector and anchor links) for maximum performance without relying on JavaScript. Additionally, I ensured the Global Navigation was responsive and maintained the correct active state tracking (`nav-item-active` class) across multiple pages, while balancing component isolation with overall group theme consistency."
      }
    },
    {
      name: "Japan Responsive Navigation",
      screenshot: japan,
      githubRepo: "https://github.com/ZainMeraki/Japan-Responsive-Figma",
      techUsed: ["HTML", "CSS", "SCSS"],
      writeUp: {
        whatItDoes: "A solo, front-end development project focused on pixel-perfectly translating a Figma design into a functional, single-page promotional website (themed 'Japan'). The primary goals were achieving high visual fidelity, ensuring full responsiveness across all devices, and optimizing for search engines (SEO).",
        whatILearned: "I mastered the art of Figma-to-HTML/CSS translation, paying close attention to spacing, typography, and layout specifications. I developed a comprehensive SCSS structure using variables and custom mixins (`@include respond-to`) to manage breakpoints, which drastically improved efficiency and scalability in handling complex multi-level responsiveness across large and small viewports. I also implemented an accessible, pure CSS navigation toggle using the checkbox hack for mobile devices, eliminating JavaScript dependency for the menu functionality.",
        myRole: "Sole Developer responsible for: 1) Converting the provided visual design into semantic HTML and scalable SCSS. 2) Developing the responsive navigation system. 3) Implementing media queries to ensure layout and image scaling are correct across desktop, tablet, and mobile (down to 480px). 4) Ensuring foundational SEO principles were met (meta tags, semantic markup, alt text).",
        challengesSolved: "The main challenge was achieving pixel-perfect design fidelity across extreme viewport changes, particularly managing complex padding, margins, and image cropping/scaling. This was solved using a highly organized SCSS mixin architecture for media queries and utilizing `object-fit: cover` for the hero image to maintain visual integrity during resizing, as specified by the design. I also had to troubleshoot cross-browser compatibility for the custom CSS navigation toggle."
      }
    },
    {
      name: "Genesis",
      screenshot: genesis,
      githubRepo: "https://github.com/ZainMeraki/Genesis-SASS-Figma",
      techUsed: ["HTML", "CSS", "SCSS"],
      writeUp: {
        whatItDoes: "A sophisticated, multi-page professional portfolio or agency website, 'Genesis' is built on a clean, typography-focused design system. It features sections for a multi-column image gallery, a detailed project showcase with dynamic layout transitions, a comprehensive list of services, and an organized awards timeline. The architecture is focused on modular SCSS for maintainability.",
        whatILearned: "I mastered advanced SCSS methodology, including structuring large projects using partials (e.g., `_project.scss`, `_typography.scss`) and leveraging variables for centralized color and font management. A key learning was implementing complex, fully responsive layouts using modern CSS Flexbox (for project details and services) and multi-column techniques (for the image gallery) that adapt across three key breakpoints.",
        myRole: "Solo Front-End Developer responsible for all UI implementation, styling, and responsive architecture. My primary responsibility was translating the visual design mockups into a highly modular, scalable, and responsive CSS architecture while ensuring pixel-perfect adherence to the design system.",
        challengesSolved: "I engineered a robust, three-stage responsive system (Desktop, Tablet @1200px, Mobile @768px) that required careful restructuring of headers, footers, and content containers to maintain alignment consistency. I also successfully managed the complex transition of multi-column layouts, such as the two-column project information and the three-column gallery, into single-column stacks for optimal mobile readability."
      }
    },
    {
      name: "GameZone",
      screenshot: gameZone,
      githubRepo: "https://github.com/ZainMeraki/BOOTSTRAP-Site",
      techUsed: ["HTML", "Bootstrap"],
      writeUp: {
        whatItDoes: "A responsive, single-page website for an online video game store called 'GameZone.' It features a distinct, dark-themed aesthetic with a red, yellow, and black color palette, showcasing core e-commerce elements like a sticky navigation bar with a mobile toggle, a searchable game catalog, a shopping cart, a user account dropdown, and a prominent special offer section. The entire structure and styling are achieved solely using HTML and Bootstrap 5 utility classes.",
        whatILearned: "I gained extensive practical experience in utilizing Bootstrap 5's utility-first approach for rapid development. This included mastering Flexbox utilities (`d-flex`, `justify-content`, `align-items`), responsive grid system (`row`, `col-md-4`), and advanced components like the Navbar (with collapsible menu and dropdowns) and Cards. I learned how to create a custom visual theme by applying color, spacing, and border utilities, rather than writing external CSS.",
        myRole: "Solo Developer responsible for the full front-end implementation and structure. My role covered layout design, component assembly, and ensuring the site's responsiveness across all major screen sizes using Bootstrap's inherent mobile-first grid system.",
        challengesSolved: "The primary challenge was achieving a professional, dark 'gaming' aesthetic without relying on custom CSS files. This was solved by creatively combining Bootstrap's background and text color utilities (`bg-dark`, `text-white`, `text-danger`, `text-warning`) with border colors (`border-warning`) for visual contrast and branding. I also successfully implemented complex nested components, such as the search bar and the newsletter input, within the main navigation and footer."
      }
    },
    {
      name: "SVG Animations",
      screenshot: svgAnimation,
      githubRepo: "https://github.com/ZainMeraki/SVGAnimBasics",
      techUsed: ["HTML", "CSS"],
      writeUp: {
        whatItDoes: "A single-page web portfolio showcasing 12 common interface icons that were completely recreated using only inline SVG code and the primitive shapes and path commands (e.g., `&lt;path&gt;`, `&lt;rect&gt;`, `&lt;circle&gt;`, `&lt;line&gt;`). The page itself features a vivid, animated CSS background gradient, and each recreated SVG icon is enhanced with CSS animations and transitions upon hovering, demonstrating proficiency in vector graphics creation and modern front-end animation techniques.",
        whatILearned: "I gained deep expertise in writing and manipulating inline SVG XML to create complex shapes, mastering the coordinate system, primitives (`rect`, `circle`, `line`), and advanced Path data (`d` attribute) commands, including absolute, relative, and arc functions (used for the Crown and House icons). Additionally, I integrated the external `Animate.css` library and custom CSS `@keyframes` for page effects and interactive hover animations.",
        myRole: "Solo Developer responsible for the end-to-end concept, SVG recreation, and front-end animation development. My role centered on utilizing vector mathematics to replicate recognizable icons and then applying modern CSS techniques for visual flair and user interaction.",
        challengesSolved: "The main challenge was accurately plotting the complex coordinates for icons like the Crown and House using only SVG path commands, requiring precise calculation of absolute and relative movements. I also successfully integrated both an external animation library (`Animate.css`) for load-in effects and custom CSS keyframe animations (like the background `gradientShift` and the SVG `spinIcon`) to create a dynamic, highly animated user experience without reliance on JavaScript."
      }
    },
    {
      name: "ATM System",
      screenshot: atmSytem,
      githubRepo: "https://github.com/ZainMeraki/JS5-Bank-Account",
      techUsed: ["HTML", "CSS", "Javascript"],
      writeUp: {
        whatItDoes: "A fully functional, web-based Automated Teller Machine (ATM) simulation designed to manage a single bank account. The system utilizes a JavaScript object (`account`) to store state (balance, account name, login status) and encapsulate all business logic (deposit, withdrawal, balance check, error handling). The application features a secure login/logout flow using JavaScript prompts and dynamic content updates, providing real-time feedback and transaction results via a dedicated message box.",
        whatILearned: "I focused on mastering JavaScript Object-Oriented Programming (OOP) principles by defining account properties and methods within a single, self-contained object. Key learnings included implementing input validation and error handling (`accountError` function) to manage invalid or insufficient fund transactions, and using DOM manipulation (`document.getElementById`) to create a dynamic, single-page interface that toggles between login and the main ATM screen. The use of `setTimeout` also demonstrated basic asynchronous behavior for managing logout delays.",
        myRole: "Solo Developer. My responsibility was creating the core business logic (the `account` object), the transaction functions (deposit, withdrawal), and the front-end event handling to bridge the user's button clicks with the underlying JS logic.",
        challengesSolved: "The main challenge was creating a robust error-checking system that validated user inputs (e.g., ensuring amounts were positive numbers) before processing any transaction. This was solved by centralizing validation in the `accountError` method and implementing conditional styling to display success/error messages clearly to the user. I also successfully implemented a smooth, multi-step user experience involving login, state management, and clear session exit."
      }
    },
    {
      name: "Book Tracker",
      screenshot: bookTracker,
      githubRepo: "https://github.com/ZainMeraki/JS6-Book-Tracker",
      techUsed: ["HTML", "CSS", "Javascript"],
      writeUp: {
        whatItDoes: "A dynamic Book Tracker application designed to manage a personal library of books. It stores books as JavaScript objects within a global array (`library`), allowing users to add new books via an interactive modal, view all books, filter for unread books, mark books as read, and remove books. The application features a responsive HTML/CSS user interface that dynamically updates the book list and key statistics (total books, read, unread) in real-time using DOM manipulation.",
        whatILearned: "I focused extensively on JavaScript array manipulation methods, which were central to the project's logic. Key skills developed include: a) Using `.push()` to add new objects, b) Using `.filter()` to efficiently display only unread books, c) Using `.find()` and `.findIndex()` coupled with `.splice()` to locate and remove specific book objects, and d) Utilizing the `.map()` method to dynamically generate the HTML book cards for the entire library display. Furthermore, I practiced connecting a complex modal form input to the main application logic.",
        myRole: "Solo Developer. My primary responsibility was architecting the JavaScript data structure (the `library` array and book objects) and developing all the CRUD (Create, Read, Update, Delete) functionality, ensuring the application state and the front-end display (`displayBooks` function) remained synchronized after every user action.",
        challengesSolved: "A significant challenge involved handling and sanitizing string inputs, especially when passing book titles containing apostrophes into dynamic HTML attributes for `onclick` functions. This was solved using the `string.replace(/'/g, \"\\\\'\")` method to correctly escape quotes. I also successfully implemented multiple interactive display modes (show all vs. show unread) and centralized the logic for updating the summary statistics into a dedicated `updateStats` function."
      }
    },
    {
      name: "Number Games",
      screenshot: numberGame,
      githubRepo: "https://github.com/ZainMeraki/JS4-Number-Games",
      techUsed: ["HTML", "CSS", "Javascript"],
      writeUp: {
        whatItDoes: "A collection of three distinct JavaScript exercises combined into a single interactive web page, designed to showcase fundamental programming logic. The exercises cover: 1) Guess the Number (a simple game utilizing random number generation and conditional logic), 2) Random Array Generator (creating arrays of arbitrary length populated by random numbers using loops), and 3) Sum of Even Numbers (analyzing the generated array using loops and the modulo operator to calculate a subset sum).",
        whatILearned: "I strengthened my foundational JavaScript skills by focusing on `Math` object functions (`Math.floor`, `Math.random`), control flow, and iterative techniques. Key takeaways include: a) Implementing the core game loop and conditional statements (`if/else if`) for the guessing game, b) Effectively using the `for` loop to populate arrays of dynamic length, and c) Utilizing the modulo operator (`%`) within a loop for filtering and summation logic. Additionally, I practiced input validation (checking for `NaN` and range limits) and detailed DOM manipulation to provide clear, color-coded feedback for each exercise.",
        myRole: "Solo Developer responsible for creating the three distinct JavaScript functionalities, setting up the necessary global variables and UI interactions, and ensuring accurate mathematical logic and efficient array processing methods.",
        challengesSolved: "The primary challenge was ensuring the logic for the *Sum of Even Numbers* exercise was efficient and robust, requiring the proper use of the `for` loop and the `% 2 === 0` condition. I also successfully linked the data flow between Exercise 2 (generating the array) and Exercise 3 (processing the array), requiring careful management of a global `currentArray` variable. Finally, I implemented keyboard shortcuts (Enter key) to enhance the user experience in the input fields."
      }
    }
  ];

  // Get all unique technologies
  const allTechs = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.techUsed.forEach(tech => techSet.add(tech));
    });
    const foundationalTechs = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'SCSS'];
    foundationalTechs.forEach(tech => techSet.add(tech));
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on search and selected technologies
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techUsed.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTechFilter = selectedTechs.length === 0 || 
                               selectedTechs.some(tech => project.techUsed.includes(tech));
      
      return matchesSearch && matchesTechFilter;
    });
  }, [projects, searchQuery, selectedTechs]);

  const toggleTechFilter = (tech) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
    setSearchQuery('');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-linear-to-br from-gray-50 via-white to-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Preview Button */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h1>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {showProjects ? `${filteredProjects.length} ${filteredProjects.length === 1 ? 'project' : 'projects'} showcased` : 'Click below to preview my work'}
          </p>
          
          {/* ⭐ PREVIEW TOGGLE BUTTON (CHALLENGE SOLUTION) */}
          <button
            onClick={() => setShowProjects(!showProjects)}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto ${
              showProjects
                ? 'bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
                : 'bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
            } text-white`}
          >
            {showProjects ? (
              <>
                <EyeOff size={24} />
                Hide Projects
              </>
            ) : (
              <>
                <Eye size={24} />
                Show Projects
              </>
            )}
          </button>
        </div>

        {/* ⭐ CONDITIONAL RENDERING - Only show if showProjects is true */}
        {showProjects ? (
          <>
            {/* Search and Filter Section */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 shadow-lg border mb-8`}>
              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                <input
                  type="text"
                  placeholder="Search projects by name or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Filter Toggle Button */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    isDark 
                      ? 'bg-gray-900 hover:bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  } transition-colors font-medium`}
                >
                  <Filter size={18} />
                  {showFilters ? 'Hide' : 'Show'} Tech Filters
                  {selectedTechs.length > 0 && (
                    <span className="ml-1 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                      {selectedTechs.length}
                    </span>
                  )}
                </button>

                {(selectedTechs.length > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>

              {/* Tech Filter Pills */}
              {showFilters && (
                <div className="flex flex-wrap gap-2 animate-fadeIn">
                  {allTechs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTechFilter(tech)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedTechs.includes(tech)
                          ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-md scale-105'
                          : isDark
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              )}

              {/* Active Filters Display */}
              {selectedTechs.length > 0 && !showFilters && (
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} self-center`}>
                    Filtered by:
                  </span>
                  {selectedTechs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-linear-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full flex items-center gap-2"
                    >
                      {tech}
                      <button
                        onClick={() => toggleTechFilter(tech)}
                        className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={index}
                    name={project.name}
                    screenshot={project.screenshot}
                    githubRepo={project.githubRepo}
                    techUsed={project.techUsed}
                    writeUp={project.writeUp}
                    isDark={isDark}
                  />
                ))}
              </div>
            ) : (
              <div className={`text-center py-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Search size={64} className="mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                <p className="mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        ) : (
          // ⭐ BLANK STATE - Shown when showProjects is false
          <div className={`text-center py-32 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <Eye size={80} className="mx-auto mb-6 opacity-30" />
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Ready to see my work?
            </h2>
            <p className="text-lg mb-8">
              Click the button above to explore my portfolio projects
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;