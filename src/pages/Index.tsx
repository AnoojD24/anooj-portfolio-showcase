import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Code, Database, Cloud, Brain, Award, Calendar } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C#'],
    'Frontend': ['React', 'Next.js', 'GraphQL', 'HTML5', 'CSS', 'Jest'],
    'Backend': ['Flask', 'Node.js', 'Django', 'Java Spring', 'Golang', 'MySQL'],
    'Data & ML': ['PyTorch', 'NumPy', 'Pandas', 'Spark', 'Hadoop', 'Dremio'],
    'DevOps': ['Docker', 'Kubernetes', 'Git', 'AWS', 'GCP', 'Azure', 'CI/CD'],
    'Security': ['OAuth 2.0', 'OpenID Connect', 'JWT', 'AWS Cognito']
  };

  const experience = [
    {
      company: "Morgan Stanley Capital International (MSCI Inc.)",
      role: "Software Engineer",
      period: "Nov 2023 - Present",
      location: "Yorba Linda, CA",
      achievements: [
        "Led modernization of 2 Legacy jQuery-based UIs by configuring Vite to transform them into React/TypeScript applications, reducing bundle size by 25%",
        "Developed responsive, high-performance user interfaces for a global financial platform (75K-100K daily users)",
        "Transformed 80+ legacy APIs into RESTful endpoints, cutting response times by 40%",
        "Collaborated with UX designers and product managers to reduce user friction and boost task completion rates by 35%",
        "Built 10+ reusable TypeScript components across multiple React apps",
        "Designed data pipelines using Python and SQL on AWS (Lambda, S3, Redshift)"
      ]
    },
    {
      company: "Morgan Stanley Capital International",
      role: "Fullstack Engineer Intern",
      period: "May 2022 - Aug 2022",
      location: "Berkeley, CA",
      achievements: [
        "Designed secure login/session management features for Control Tower platform",
        "Conducted end-to-end testing for 10+ authentication and streaming APIs using Jest and Postman",
        "Tuned MySQL queries improving dashboard response times by 30%",
        "Decreased post-deployment bugs by 20% through comprehensive testing"
      ]
    },
    {
      company: "Morgan Stanley Capital International",
      role: "Software Engineer Intern",
      period: "May 2021 - Aug 2021",
      location: "Berkeley, CA",
      achievements: [
        "Developed dynamic React/Redux portal for filtering ESG reports serving 1,000+ enterprise clients",
        "Built reusable React component library with 15+ TypeScript UI components",
        "Achieved 100% unit test coverage with Jest, reducing QA time by 30%",
        "Participated in Agile sprints with peer code reviews"
      ]
    }
  ];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-blue-400" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anooj Desai
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Education', 'Projects', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Anooj Desai
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer & AI Enthusiast
            </div>
            <div className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Crafting exceptional digital experiences at MSCI Inc. | MS Computer Science with AI Emphasis at UT Austin
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:adesai24@utexas.edu" className="p-3 bg-slate-800/50 backdrop-blur-md rounded-full hover:bg-blue-600/20 transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 backdrop-blur-md rounded-full hover:bg-blue-600/20 transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 backdrop-blur-md rounded-full hover:bg-blue-600/20 transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="tel:714-334-9017" className="p-3 bg-slate-800/50 backdrop-blur-md rounded-full hover:bg-blue-600/20 transition-all hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Yorba Linda, CA</span>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer currently pursuing my Master's in Computer Science with an AI emphasis at the University of Texas at Austin. With extensive experience at Morgan Stanley Capital International, I specialize in building scalable, high-performance applications that serve tens of thousands of users globally.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans full-stack development, from modernizing legacy systems with React and TypeScript to designing robust data pipelines on AWS. I'm particularly passionate about the intersection of AI and software engineering, constantly exploring how machine learning can enhance user experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <Code className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-sm text-gray-400">React, TypeScript, Python, Node.js</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
                <Brain className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-400">PyTorch, Deep Learning, Reinforcement Learning</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all">
                <Database className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Data Engineering</h3>
                <p className="text-sm text-gray-400">SQL, ETL, Spark, Hadoop</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all">
                <Cloud className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-gray-400">AWS, Docker, Kubernetes, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{job.role}</h3>
                    <p className="text-xl text-gray-300 mb-2">{job.company}</p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{job.period}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-purple-400">Master of Science</h3>
                  <p className="text-gray-300">Computer Science with AI Emphasis</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">University of Texas at Austin</p>
              <p className="text-gray-400 text-sm mb-4">Aug 2023 - May 2026</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400 font-medium">Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Online Learning/Optimization', 'Machine Learning', 'Deep Learning', 'Advances in Deep Learning', 'Reinforcement Learning'].map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Bachelor of Arts</h3>
                  <p className="text-gray-300">Computer Science with Data Science Minor</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">University of California, Berkeley</p>
              <p className="text-gray-400 text-sm">Aug 2019 - May 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Project
          </h2>
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/30 transition-all">
            <div className="flex items-center mb-6">
              <Brain className="w-10 h-10 text-green-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-green-400">Vision-Language Model (VLM) for SuperTuxKart</h3>
                <p className="text-gray-400">AnoojD24/VLMProject</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-700/30 p-4 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-2">Data Pipeline</h4>
                <p className="text-sm text-gray-300">Generated 1,000+ question-answer pairs from SuperTuxKart image metadata with diverse QA templates</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-2">Model Performance</h4>
                <p className="text-sm text-gray-300">Achieved 85% validation accuracy through data augmentation and architecture tuning</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-2">Optimization</h4>
                <p className="text-sm text-gray-300">Integrated quantization and batch processing, cutting inference time by 30%</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Python', 'Computer Vision', 'NLP', 'Data Augmentation', 'Quantization'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities, innovative projects, or potential collaborations.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:adesai24@utexas.edu" className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a href="tel:714-334-9017" className="flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Anooj Desai. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;