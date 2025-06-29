import { Button } from '@/components/ui/button';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
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
        {/* Cartoon Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-green to-cyber-purple p-1 animate-glow-pulse mx-0 my-[20px]">
            <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center relative overflow-hidden mx-0">
              {/* Cartoon Developer Avatar */}
              <div className="w-40 h-40 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full relative flex items-center justify-center">
                {/* Hoodie */}
                <div className="absolute top-2 w-36 h-20 bg-gray-800 rounded-t-full"></div>
                {/* Face */}
                <div className="w-24 h-24 bg-amber-100 rounded-full relative z-10">
                  {/* Hair */}
                  <div className="absolute -top-2 w-28 h-16 bg-gray-900 rounded-t-full left-1/2 transform -translate-x-1/2"></div>
                  {/* Eyes */}
                  <div className="absolute top-8 left-6 w-2 h-2 bg-gray-900 rounded-full"></div>
                  <div className="absolute top-8 right-6 w-2 h-2 bg-gray-900 rounded-full"></div>
                  {/* Nose */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-200 rounded-full"></div>
                  {/* Smile */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-900 rounded-b-full"></div>
                </div>
                {/* Laptop glow effect */}
                <div className="absolute bottom-0 w-8 h-4 bg-cyber-blue/50 rounded-sm animate-pulse"></div>
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
    </section>;
};
export default HeroSection;