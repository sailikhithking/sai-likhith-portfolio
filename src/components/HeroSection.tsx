import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, Zap, Brain, Rocket, Coffee, Star } from 'lucide-react';

// Animated background particles
const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Floating interactive blobs
const FloatingBlob = ({ index }: { index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const x = useTransform(springX, (value) => value / (10 + index * 2));
  const y = useTransform(springY, (value) => value / (10 + index * 2));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const colors = ['cyber-blue', 'cyber-green', 'cyber-purple'];
  const sizes = [300, 400, 350, 250];
  const positions = [
    { top: '10%', left: '10%' },
    { top: '70%', right: '15%' },
    { top: '30%', right: '10%' },
    { bottom: '20%', left: '20%' },
  ];

  return (
    <motion.div
      className={`absolute w-${sizes[index % sizes.length]} h-${sizes[index % sizes.length]} rounded-full opacity-10 blur-3xl`}
      style={{
        background: `radial-gradient(circle, var(--${colors[index % colors.length]}), transparent 70%)`,
        ...positions[index % positions.length],
        x,
        y,
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20 + index * 5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Matrix-style background
const MatrixBackground = () => {
  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = Array.from({ length: 100 }, () => characters[Math.floor(Math.random() * characters.length)]);
    setMatrixChars(chars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      {matrixChars.map((char, i) => (
        <motion.div
          key={i}
          className="absolute text-cyber-green font-mono text-sm"
          style={{
            left: `${(i % 20) * 5}%`,
            top: `${Math.floor(i / 20) * 10}%`,
          }}
          animate={{
            y: ['-100vh', '100vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
};

// Circuit SVG animation
const CircuitPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100">
        <path
          d="M10 10h20v20h20v20h-20v20h-40v-20h20v-20h20z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
        />
      </pattern>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
    <motion.path
      d="M0 500h200l50-50h200l50 50h200l50-50h200"
      fill="none"
      stroke="#00d4ff"
      strokeWidth="2"
      strokeDasharray="20 10"
      initial={{ strokeDashoffset: 1000 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

// Stats badge component
const StatsBadge = ({ icon: Icon, label, value, delay }: { 
  icon: any, 
  label: string, 
  value: string, 
  delay: number 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-3 bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/80 backdrop-blur-lg border border-cyber-blue/30 rounded-2xl p-4 hover:border-cyber-blue/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20"
    >
      <div className="p-2 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg">
        <Icon className="w-5 h-5 text-black" />
      </div>
      <div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-lg font-bold text-white">{value}</div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTypewriter(true), 500);
    const timer2 = setTimeout(() => setShowSubtext(true), 3000);
    const timer3 = setTimeout(() => setShowStats(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker">
      {/* Background Effects */}
      <MatrixBackground />
      <ParticleField />
      <CircuitPattern />
      
      {/* Floating Blobs */}
      {[...Array(4)].map((_, i) => (
        <FloatingBlob key={i} index={i} />
      ))}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        {/* Avatar with Holographic Effect */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="w-48 h-48 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-green to-cyber-purple p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="text-6xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👨‍💻
                </motion.div>
                {/* Holographic glitch effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"
                  animate={{ x: [-200, 200] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
            
            {/* Floating icons around avatar */}
            {[
              { icon: '⚛️', angle: 0 },
              { icon: '🐍', angle: 90 },
              { icon: '⚡', angle: 180 },
              { icon: '🚀', angle: 270 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '50% 120px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                initial={{ rotate: item.angle }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Name with Typewriter Effect */}
        <div className="h-24 mb-6">
          {showTypewriter && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl md:text-8xl font-bold font-sora text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple animate-neon-glow"
            >
              <Typewriter
                options={{
                  strings: ['Sai Likhith GB'],
                  autoStart: true,
                  delay: 100,
                  deleteSpeed: 50,
                  loop: false,
                }}
              />
            </motion.h1>
          )}
        </div>

        {/* Subtitle with Typewriter Effect */}
        <div className="h-16 mb-8">
          {showSubtext && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-sora text-cyan-300 animate-neon-glow"
            >
              <Typewriter
                options={{
                  strings: ['Youngest Full-Stack Developer in India'],
                  autoStart: true,
                  delay: 80,
                  deleteSpeed: 50,
                  loop: false,
                }}
              />
            </motion.h2>
          )}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-inter"
        >
          Building the future of tech, one line of code at a time. Specialized in{' '}
          <span className="text-cyber-blue font-semibold animate-pulse">MERN Stack</span>,{' '}
          <span className="text-cyber-green font-semibold animate-pulse">Python</span>, and{' '}
          <span className="text-cyber-purple font-semibold animate-pulse">Modern Web Technologies</span>.
        </motion.p>

        {/* Stats Section */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            <StatsBadge icon={Code} label="Coding Since" value="Age 13" delay={0.1} />
            <StatsBadge icon={Zap} label="Stack" value="MERN + Python" delay={0.2} />
            <StatsBadge icon={Brain} label="Featured on" value="Dev.to, Hashnode" delay={0.3} />
            <StatsBadge icon={Rocket} label="Location" value="Bengaluru, India" delay={0.4} />
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50 border border-transparent hover:border-cyber-blue/30 font-sora"
          >
            <a href="/projects">🚀 Explore My Universe</a>
          </Button>
          
          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 rounded-full shadow-lg hover:shadow-cyber-blue/50 hover:border-cyber-blue/50 font-sora"
            >
              <a href="https://github.com/SailikhithGB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} />
                GitHub
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 rounded-full shadow-lg hover:shadow-cyber-green/50 hover:border-cyber-green/50 font-sora"
            >
              <a href="https://www.linkedin.com/in/sai-likhith-g-b-180b332a4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Quote with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-lg border border-cyber-purple/30 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-purple/10 to-transparent"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-xl md:text-2xl text-gray-300 italic font-inter relative z-10">
              "At 16, I'm not just coding the present—I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple font-bold animate-neon-glow">
                engineering the future
              </span>
              {' '}of India's tech landscape."
            </p>
            <div className="flex justify-center mt-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-cyber-blue"
              >
                <Star className="w-8 h-8" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
