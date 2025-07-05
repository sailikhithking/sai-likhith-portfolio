import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { 
  Code2, 
  Rocket, 
  Brain, 
  Zap, 
  Star, 
  Target, 
  Globe, 
  Award,
  Coffee,
  Monitor,
  Smartphone,
  Database,
  GitBranch,
  Cloud
} from 'lucide-react';

// Animated SVG timeline
const AnimatedTimeline = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [ref, inView] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="absolute left-1/2 transform -translate-x-1/2 h-full">
      <svg
        width="4"
        height="100%"
        viewBox="0 0 4 800"
        className="w-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <motion.path
          ref={pathRef}
          d="M2 0 L2 800"
          stroke="url(#timelineGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Animated particles along the path */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx="2"
            cy="0"
            r="2"
            fill="#00d4ff"
            initial={{ cy: 0, opacity: 0 }}
            animate={inView ? { 
              cy: 800, 
              opacity: [0, 1, 1, 0],
            } : {}}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Enhanced timeline item
const TimelineItem = ({ item, index, isLeft }: { 
  item: any, 
  index: number, 
  isLeft: boolean 
}) => {
  const [ref, inView] = useIntersectionObserver({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="bg-gradient-to-br from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-blue/30 rounded-2xl p-6 relative overflow-hidden group hover:border-cyber-blue/60 transition-all duration-300"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent"
            animate={{ x: [-300, 300] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.div
              className="text-4xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {item.icon}
            </motion.div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green mb-2">
              Age {item.age}
            </div>
            <div className="text-cyber-blue font-semibold mb-3 text-lg">{item.tech}</div>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
            
            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills?.map((skill: string, i: number) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-3 py-1 text-xs bg-cyber-blue/20 border border-cyber-blue/40 rounded-full text-cyber-blue"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Timeline dot with pulse effect */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="relative z-10"
      >
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full border-4 border-cyber-dark relative"
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(0, 212, 255, 0.7)',
              '0 0 0 10px rgba(0, 212, 255, 0)',
              '0 0 0 0 rgba(0, 212, 255, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-1 bg-gradient-to-r from-cyber-green to-cyber-purple rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
      
      <div className="flex-1"></div>
    </motion.div>
  );
};

// Floating tech icons
const FloatingTechIcon = ({ icon: Icon, delay, position }: { 
  icon: any, 
  delay: number, 
  position: { x: string, y: string } 
}) => (
  <motion.div
    className="absolute text-cyber-blue/30"
    style={{ left: position.x, top: position.y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    <Icon size={24} />
  </motion.div>
);

// Interactive skill badge
const SkillBadge = ({ skill, index }: { skill: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.span
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="block bg-gradient-to-r from-cyber-blue/20 via-cyber-green/20 to-cyber-purple/20 border border-cyber-blue/30 px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20 hover:border-cyber-blue/60"
      >
        {skill}
        
        {isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-4 h-4 bg-cyber-green rounded-full"
          />
        )}
      </motion.span>
    </motion.div>
  );
};

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const techStack = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 
    'Express.js', 'Next.js', 'Tailwind CSS', 'Git', 'Docker', 'AWS',
    'PostgreSQL', 'Redis', 'Socket.io', 'GraphQL', 'REST APIs', 'Firebase'
  ];

  const timeline = [
    { 
      age: '13', 
      tech: 'Python & Basics', 
      description: 'Started my coding journey with Python. Built my first "Hello World" and fell in love with programming logic.',
      icon: '🐍',
      skills: ['Python', 'Logic Building', 'Problem Solving']
    },
    { 
      age: '14', 
      tech: 'Web Development', 
      description: 'Discovered HTML, CSS, and JavaScript. Created my first interactive websites and learned about DOM manipulation.',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'JavaScript', 'DOM']
    },
    { 
      age: '15', 
      tech: 'React & Backend', 
      description: 'Mastered React.js and Node.js. Built my first full-stack applications and learned about databases and APIs.',
      icon: '⚛️',
      skills: ['React', 'Node.js', 'MongoDB', 'APIs']
    },
    { 
      age: '16', 
      tech: 'Advanced Projects', 
      description: 'Currently building complex e-commerce platforms, exploring AI/ML, and sharing knowledge through blogs and open source.',
      icon: '🚀',
      skills: ['MERN Stack', 'TypeScript', 'DevOps', 'Open Source']
    },
  ];

  const achievements = [
    { icon: Star, label: 'Featured Developer', value: 'Dev.to, Hashnode' },
    { icon: Code2, label: 'Projects Built', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
    { icon: GitBranch, label: 'GitHub Commits', value: '1000+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker relative overflow-hidden">
      <Navigation />
      
      {/* Floating tech icons */}
      <FloatingTechIcon icon={Code2} delay={0} position={{ x: '10%', y: '20%' }} />
      <FloatingTechIcon icon={Database} delay={1} position={{ x: '85%', y: '15%' }} />
      <FloatingTechIcon icon={Cloud} delay={2} position={{ x: '90%', y: '70%' }} />
      <FloatingTechIcon icon={Monitor} delay={3} position={{ x: '5%', y: '60%' }} />
      <FloatingTechIcon icon={Smartphone} delay={4} position={{ x: '15%', y: '80%' }} />

      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          x: useTransform(springX, (value) => value / 50),
          y: useTransform(springY, (value) => value / 50),
        }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyber-blue rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyber-green rounded-full blur-3xl opacity-10" />
      </motion.div>
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-sora"
              animate={{ 
                textShadow: [
                  '0 0 10px #00d4ff',
                  '0 0 20px #00d4ff, 0 0 30px #00d4ff',
                  '0 0 10px #00d4ff'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">Me</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-inter"
            >
              The story of a 16-year-old building the future, one commit at a time
            </motion.p>
          </motion.div>

          {/* 3D Developer Avatar Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-blue/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <motion.h2
                    className="text-4xl font-bold mb-6 text-cyber-blue font-sora"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Who I Am
                  </motion.h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 font-inter">
                    I'm <span className="text-cyber-green font-semibold">Sai Likhith GB</span>, a 16-year-old full-stack developer from Bengaluru who discovered the magic of code at 13. 
                    What started as curiosity about how websites work has evolved into a passion for building digital experiences that matter.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 font-inter">
                    I believe in <span className="text-cyber-purple font-semibold">learning by building</span>, solving real problems, and sharing knowledge. 
                    My goal isn't just to write code—it's to engineer solutions that make a difference.
                  </p>

                  {/* Achievement badges */}
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-center gap-3 bg-cyber-dark/50 border border-cyber-blue/20 rounded-xl p-3 hover:border-cyber-blue/40 transition-all duration-300"
                      >
                        <div className="p-2 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg">
                          <achievement.icon className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">{achievement.label}</div>
                          <div className="text-sm font-bold text-white">{achievement.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3D Developer illustration */}
                <motion.div
                  className="flex justify-center"
                  animate={{ 
                    rotateY: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyber-blue/20 via-cyber-green/20 to-cyber-purple/20 border border-cyber-blue/30 backdrop-blur-lg flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                    >
                      {/* Holographic effects */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/10 to-transparent"
                        animate={{ x: [-300, 300] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Developer emoji with glow */}
                      <motion.div
                        className="text-8xl relative z-10"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          filter: [
                            'drop-shadow(0 0 10px #00d4ff)',
                            'drop-shadow(0 0 20px #00d4ff)',
                            'drop-shadow(0 0 10px #00d4ff)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        👨‍💻
                      </motion.div>

                      {/* Floating code elements */}
                      {['{ }', '</>', 'npm', 'git', 'API'].map((code, i) => (
                        <motion.div
                          key={code}
                          className="absolute text-cyber-green/60 font-mono text-sm"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${15 + i * 20}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        >
                          {code}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Enhanced Timeline Section */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-16 text-center font-sora"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">Journey</span>
            </motion.h2>
            
            <div className="relative max-w-5xl mx-auto">
              <AnimatedTimeline />
              
              <div className="space-y-20">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={item.age}
                    item={item}
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center font-sora">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">Arsenal</span>
            </h2>
            
            <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-purple/30 rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-purple/5 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 relative z-10">
                {techStack.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Vision Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-cyber-blue/10 via-cyber-green/10 to-cyber-purple/10 border border-cyber-blue/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent"
                animate={{ x: [-500, 500] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10 text-center">
                <motion.h2
                  className="text-4xl font-bold mb-8 font-sora"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    textShadow: [
                      '0 0 20px #00d4ff',
                      '0 0 30px #00d4ff, 0 0 40px #00d4ff',
                      '0 0 20px #00d4ff'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">Vision</span>
                </motion.h2>
                
                <motion.p
                  className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  I'm not just learning to code—I'm <span className="text-cyber-blue font-semibold">engineering the future</span>. 
                  My vision is to become one of India's leading tech entrepreneurs, launch innovative startups, 
                  and inspire the next generation of developers. The goal isn't just to build products, 
                  but to create <span className="text-cyber-green font-semibold">solutions that transform lives</span>.
                </motion.p>

                <div className="flex justify-center mt-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="w-12 h-12 text-cyber-purple" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Motivational Quote */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-green/30 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/5 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.blockquote
                className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple mb-6 font-sora relative z-10"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                "The best time to plant a tree was 20 years ago. The second best time is now. I'm planting my tech forest at 16."
              </motion.blockquote>
              
              <motion.p
                className="text-gray-400 text-lg font-inter relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                — Sai Likhith GB
              </motion.p>

              <div className="flex justify-center mt-8">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="text-cyber-green"
                >
                  <Globe className="w-10 h-10" />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default About;
