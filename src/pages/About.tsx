import Navigation from '@/components/Navigation';

const About = () => {
  const techStack = [
    'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB', 
    'MERN Stack', 'APIs', 'Git', 'HTML/CSS', 'Express.js'
  ];

  const timeline = [
    { age: '13', tech: 'Python', description: 'First Python script', icon: '🐍' },
    { age: '14', tech: 'JavaScript', description: 'Built mini apps and explored automation', icon: '⚡' },
    { age: '15', tech: 'React', description: 'Learned JavaScript, React, Node.js', icon: '⚛️' },
    { age: '16', tech: 'Projects', description: 'Building an online shopping platform (e-commerce app)', icon: '🚀' },
  ];

  const personalStats = [
    { label: 'Age', value: '16', icon: '🎂' },
    { label: 'Years Coding', value: '3+', icon: '💻' },
    { label: 'Projects Built', value: '25+', icon: '🚀' },
    { label: 'Location', value: 'Bengaluru', icon: '📍' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          {/* Personal Profile Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Image */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative group">
                    {/* Outer glow effect */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple rounded-full blur-md opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                    
                    {/* Main image container */}
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-green to-cyber-purple p-1">
                      <div className="w-full h-full rounded-full bg-cyber-dark p-1 relative overflow-hidden">
                        <img 
                          src="data:image/jpeg;base64,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"
                          alt="Sai Likhith GB - About Profile"
                          className="w-full h-full object-cover rounded-full"
                        />
                        
                        {/* Subtle overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/20 via-transparent to-transparent rounded-full mix-blend-overlay"></div>
                        
                        {/* Floating particles */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-green/80 rounded-full animate-float"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-purple/80 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Stats */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-cyber-blue">Meet Sai Likhith</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      A passionate 16-year-old developer from Bengaluru, building the future one line of code at a time. Started with Python at 13, now mastering full-stack development with React, Node.js, and modern web technologies.
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {personalStats.map((stat, index) => (
                      <div 
                        key={stat.label}
                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievement Highlights */}
                  <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10 rounded-xl p-4 border border-cyber-blue/20">
                    <h3 className="font-semibold text-cyber-blue mb-2">🏆 Quick Highlights</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Youngest full-stack developer in India</li>
                      <li>• Featured on Dev.to and Hashnode</li>
                      <li>• Building production-ready e-commerce platform</li>
                      <li>• Active contributor to open-source projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who I Am Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-cyber-blue">My Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Sai Likhith GB, a 16-year-old full-stack developer from Bengaluru. I started coding at 13 and haven't stopped building since. I believe in solving real problems, writing clean code, and sharing what I learn. My journey is just beginning, but the vision is global.
              </p>
            </div>
          </section>

          {/* Visual Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-purple opacity-30"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={item.age}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-2xl font-bold gradient-text mb-2">
                          Age {item.age}
                        </div>
                        <div className="text-cyber-blue font-semibold mb-2">{item.tech}</div>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full border-4 border-black animate-pulse"></div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* My Vision Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyber-blue/10 via-cyber-green/10 to-cyber-purple/10 border border-white/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                My <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                I'm building toward becoming one of India's top programmers, launching my own tech startup, and speaking on global stages like TEDx. The future of technology is in the hands of those who dare to dream big and code bigger.
              </p>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {techStack.map((tech, index) => (
                  <span 
                    key={tech}
                    className="bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 border border-cyber-blue/30 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyber-blue/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Motivational Quote Section */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-cyber-blue/10 via-cyber-green/10 to-cyber-purple/10 border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                "The best way to learn is to build. I'm just getting started."
              </blockquote>
              <p className="text-gray-400">— Sai Likhith GB</p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-lg text-gray-300 italic max-w-3xl mx-auto">
                "Remember the name: <span className="gradient-text font-semibold">Sai Likhith GB</span> — the youngest full-stack developer building India's tech future."
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
