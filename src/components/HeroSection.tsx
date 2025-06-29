import { Button } from '@/components/ui/button';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      {/* Floating background elements */}
      <div className="floating-icon top-20 left-10 text-6xl">⚛️</div>
      <div className="floating-icon top-40 right-20 text-4xl" style={{
        animationDelay: '2s'
      }}>🐍</div>
      <div className="floating-icon bottom-40 left-20 text-5xl" style={{
        animationDelay: '4s'
      }}>⚡</div>
      <div className="floating-icon bottom-20 right-10 text-3xl" style={{
        animationDelay: '1s'
      }}>🚀</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Digital Developer Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-green to-cyber-purple p-1 animate-glow-pulse mx-0 my-[20px]">
            <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center relative overflow-hidden">
              {/* Digital Developer Illustration */}
              <div className="w-44 h-44 relative flex items-center justify-center">
                {/* Dark room background */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-full"></div>
                
                {/* Holographic UI elements floating around */}
                <div className="absolute top-4 left-6 w-8 h-1 bg-cyber-blue/60 rounded animate-pulse"></div>
                <div className="absolute top-8 left-4 w-6 h-1 bg-cyber-green/60 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-6 right-6 w-4 h-4 border border-cyber-purple/60 rounded animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-6 right-4 w-6 h-1 bg-cyber-blue/60 rounded animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                {/* Developer figure */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Head with hoodie */}
                  <div className="w-16 h-16 relative mb-2">
                    {/* Hoodie */}
                    <div className="absolute top-2 w-20 h-14 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-full left-1/2 transform -translate-x-1/2 border border-gray-600"></div>
                    {/* Hood shadow */}
                    <div className="absolute top-0 w-18 h-8 bg-gradient-to-b from-gray-800 to-transparent rounded-t-full left-1/2 transform -translate-x-1/2 opacity-80"></div>
                    
                    {/* Face */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full z-10">
                      {/* Hair under hood */}
                      <div className="absolute -top-1 w-14 h-6 bg-gray-900 rounded-t-full left-1/2 transform -translate-x-1/2"></div>
                      {/* Eyes with focus */}
                      <div className="absolute top-4 left-3 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      {/* Concentrated expression */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-800 rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* Glowing laptop */}
                  <div className="relative">
                    {/* Laptop base */}
                    <div className="w-12 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded border border-gray-600 relative">
                      {/* Screen with glow */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t border border-gray-600">
                        {/* Screen content with code */}
                        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-t p-0.5 flex flex-col gap-0.5">
                          <div className="w-6 h-0.5 bg-cyber-green rounded opacity-80"></div>
                          <div className="w-4 h-0.5 bg-cyber-blue rounded opacity-60"></div>
                          <div className="w-7 h-0.5 bg-cyber-purple rounded opacity-70"></div>
                        </div>
                        {/* Screen glow effect */}
                        <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/30 via-transparent to-transparent rounded-t animate-pulse"></div>
                      </div>
                      {/* Keyboard glow */}
                      <div className="absolute top-1 left-1 right-1 bottom-1 bg-gradient-to-t from-cyber-blue/20 to-transparent rounded"></div>
                    </div>
                    
                    {/* Hands typing */}
                    <div className="absolute -bottom-1 left-2 w-2 h-3 bg-gradient-to-b from-amber-200 to-amber-300 rounded transform -rotate-12"></div>
                    <div className="absolute -bottom-1 right-2 w-2 h-3 bg-gradient-to-b from-amber-200 to-amber-300 rounded transform rotate-12"></div>
                  </div>
                </div>
                
                {/* Floating code snippets */}
                <div className="absolute top-8 left-8 text-[8px] text-cyber-green font-mono opacity-60 animate-float">{'<React/>'}</div>
                <div className="absolute bottom-8 right-8 text-[8px] text-cyber-blue font-mono opacity-60 animate-float" style={{animationDelay: '1s'}}>{'{ }'}</div>
                <div className="absolute top-12 right-10 text-[8px] text-cyber-purple font-mono opacity-60 animate-float" style={{animationDelay: '2s'}}>{'npm'}</div>
                
                {/* Ambient lighting effect */}
                <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/10 via-cyber-green/5 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in">
          Hi, I'm <span className="gradient-text ">Sai Likhith GB</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in" style={{
        animationDelay: '0.2s'
      }}>
          Youngest full-stack developer in India. Building bold digital experiences using{' '}
          <span className="text-cyber-blue font-semibold">Python</span>,{' '}
          <span className="text-cyber-green font-semibold">React</span> &{' '}
          <span className="text-cyber-purple font-semibold">Node.js</span> since age 13.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in" style={{
        animationDelay: '0.4s'
      }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50 border border-transparent hover:border-cyber-blue/30">
            <a href="/projects">Explore My Work</a>
          </Button>
          
          <div className="flex gap-4">
            <Button asChild variant="outline" size="lg" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 rounded-full shadow-lg hover:shadow-cyber-blue/50 hover:border-cyber-blue/50">
              <a href="https://github.com/sailikhithking" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 rounded-full shadow-lg hover:shadow-cyber-green/50 hover:border-cyber-green/50">
              <a href="https://www.linkedin.com/in/sai-likhith-g-b-180b332a4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Call to action quote */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto animate-slide-in" style={{
        animationDelay: '0.6s'
      }}>
          <p className="text-lg text-gray-300 italic">
            "Remember the name: <span className="gradient-text font-semibold">Sai Likhith GB</span> — the youngest full-stack developer building India's tech future."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
