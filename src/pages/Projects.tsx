
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What I'm <span className="gradient-text">Building</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Crafting solutions that matter, one line of code at a time
            </p>
          </div>

          {/* Featured Project */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyber-blue/20 border border-cyber-blue/30 px-3 py-1 rounded-full text-sm font-medium text-cyber-blue">
                    Featured Project
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Clock size={16} />
                    <span className="text-sm">Launching Soon</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">ShopVerse</span> – The Smart Shopping Platform
                </h2>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  A modern e-commerce web app using MERN stack, focusing on personalized shopping, cart, checkout, and smart product listings. Built from scratch with attention to user experience and modern web standards.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Stripe API', 'Responsive Design'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-cyber-green/20 border border-cyber-green/30 px-3 py-1 rounded-full text-sm font-medium text-cyber-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyber-blue">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
                      User Authentication & Profiles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
                      Smart Product Search
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
                      Shopping Cart & Wishlist
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
                      Secure Payment Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
                      Order Tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyber-green rounded-full"></span>
                      Admin Dashboard
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10 border border-white/20 rounded-xl p-4 mb-6">
                  <p className="text-center text-gray-300">
                    <strong className="text-white">Status:</strong> Launching soon. Built from scratch by Sai Likhith GB.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    disabled
                    size="lg"
                    className="bg-gradient-to-r from-cyber-blue to-cyber-green text-black font-semibold opacity-50 cursor-not-allowed"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo (Coming Soon)
                  </Button>
                  <Button 
                    disabled
                    variant="outline" 
                    size="lg"
                    className="border-cyber-blue text-cyber-blue opacity-50 cursor-not-allowed"
                  >
                    <Github size={20} className="mr-2" />
                    Source Code (Private)
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* More Projects Coming Soon */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                More Projects <span className="gradient-text">Coming Soon</span>
              </h2>
              <p className="text-gray-300 mb-6">
                I'm constantly building and experimenting with new technologies. Stay tuned for more exciting projects that showcase my skills and creativity.
              </p>
              <div className="flex justify-center space-x-4 text-4xl animate-float">
                <span style={{ animationDelay: '0s' }}>🚀</span>
                <span style={{ animationDelay: '1s' }}>⚡</span>
                <span style={{ animationDelay: '2s' }}>🔥</span>
              </div>
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

export default Projects;
