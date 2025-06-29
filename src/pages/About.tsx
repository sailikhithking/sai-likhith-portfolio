
import Navigation from '@/components/Navigation';

const About = () => {
  const techStack = [
    'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB', 
    'MERN Stack', 'APIs', 'Git', 'HTML/CSS', 'Express.js'
  ];

  const timeline = [
    { age: '13', description: 'First Python script' },
    { age: '14', description: 'Built mini apps and explored automation' },
    { age: '15', description: 'Learned JavaScript, React, Node.js' },
    { age: '16', description: 'Building an online shopping platform (e-commerce app)' },
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

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div 
                  key={item.age}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl font-bold gradient-text mb-4">
                    Age {item.age}
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
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
                    className="bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 border border-cyber-blue/30 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyber-blue/10 via-cyber-green/10 to-cyber-purple/10 border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                "The best way to learn is to build. I'm just getting started."
              </blockquote>
              <p className="text-gray-400">— Sai Likhith GB</p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 text-center">
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
