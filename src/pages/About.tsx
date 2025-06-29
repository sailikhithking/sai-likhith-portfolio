
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

          {/* Who I Am Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-cyber-blue">Who I Am</h2>
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
