import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Clock, 
  ShoppingCart, 
  CreditCard, 
  Users, 
  Zap, 
  Globe,
  Code2,
  Database,
  Smartphone,
  Monitor,
  FileText,
  MessageSquare,
  Search,
  Shield,
  Rocket,
  Star,
  Eye
} from 'lucide-react';

// Enhanced project card with tilt effect
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-blue/30 rounded-3xl overflow-hidden relative group hover:border-cyber-blue/60 transition-all duration-500"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent"
          animate={{ x: isHovered ? [-400, 400] : 0 }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />

        {/* Project mockup/preview */}
        <div className="relative h-64 bg-gradient-to-br from-cyber-dark to-black border-b border-cyber-blue/20 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-cyber-green/5 to-cyber-purple/10"
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
          
          {/* Browser mockup for web projects */}
          {project.type === 'web' && (
            <div className="p-4 h-full">
              <div className="bg-gray-800 rounded-t-lg p-2 border-b border-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-700 rounded ml-4 px-2 py-1 text-xs text-gray-300">
                    {project.url}
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 h-full rounded-b-lg p-4 relative overflow-hidden">
                {project.mockup}
                
                {/* Hover animation overlay */}
                {isHovered && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 via-transparent to-cyber-green/20 rounded-lg"
                  />
                )}
              </div>
            </div>
          )}

          {/* Mobile mockup for mobile projects */}
          {project.type === 'mobile' && (
            <div className="flex justify-center items-center h-full p-8">
              <motion.div
                className="w-32 h-56 bg-gray-800 rounded-3xl border-4 border-gray-600 relative overflow-hidden"
                animate={isHovered ? { rotateY: [0, 10, -10, 0] } : {}}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
              >
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full"></div>
                <div className="p-2 pt-6 h-full">
                  {project.mockup}
                </div>
              </motion.div>
            </div>
          )}
        </div>

        <div className="p-6 relative z-10">
          {/* Project status badge */}
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className={`px-3 py-1 rounded-full text-sm font-medium border ${project.status === 'live' 
                ? 'bg-cyber-green/20 border-cyber-green/30 text-cyber-green' 
                : project.status === 'development'
                ? 'bg-cyber-blue/20 border-cyber-blue/30 text-cyber-blue'
                : 'bg-cyber-purple/20 border-cyber-purple/30 text-cyber-purple'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {project.statusText}
            </motion.div>
            {project.featured && (
              <motion.div
                className="bg-gradient-to-r from-cyber-blue to-cyber-green px-3 py-1 rounded-full text-xs font-bold text-black"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐ FEATURED
              </motion.div>
            )}
          </div>

          <h3 className="text-2xl font-bold mb-3 font-sora">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">
              {project.name}
            </span>
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed font-inter">
            {project.description}
          </p>

          {/* Key features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-cyber-blue mb-2 flex items-center gap-2">
              <Zap size={14} />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.features.map((feature: string, i: number) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="bg-cyber-blue/20 border border-cyber-blue/40 px-3 py-1 rounded-full text-xs font-medium text-cyber-blue hover:bg-cyber-blue/30 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {project.demoUrl ? (
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Eye size={16} />
                  Live Demo
                </a>
              </Button>
            ) : (
              <Button
                disabled
                size="sm"
                className="bg-gradient-to-r from-cyber-blue to-cyber-green opacity-50 cursor-not-allowed text-black font-semibold"
              >
                <Clock size={16} className="mr-2" />
                Coming Soon
              </Button>
            )}
            
            {project.githubUrl ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/50"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={16} />
                  Source Code
                </a>
              </Button>
            ) : (
              <Button
                disabled
                variant="outline"
                size="sm"
                className="border-cyber-green text-cyber-green opacity-50 cursor-not-allowed"
              >
                <Shield size={16} className="mr-2" />
                Private Repo
              </Button>
            )}
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%)',
            filter: 'blur(1px)',
          }}
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

// Floating project stats
const ProjectStats = () => {
  const stats = [
    { icon: Code2, label: 'Projects Built', value: '15+' },
    { icon: Star, label: 'GitHub Stars', value: '50+' },
    { icon: Users, label: 'Happy Users', value: '100+' },
    { icon: Rocket, label: 'Deployments', value: '25+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
          className="bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-lg border border-cyber-blue/30 rounded-2xl p-4 text-center hover:border-cyber-blue/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20"
        >
          <div className="flex justify-center mb-2">
            <div className="p-2 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg">
              <stat.icon className="w-5 h-5 text-black" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Projects = () => {
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

  const projects = [
    {
      name: 'ShopVerse',
      description: 'A modern e-commerce platform built with the MERN stack. Features personalized recommendations, smart checkout, and real-time order tracking.',
      type: 'web',
      status: 'development',
      statusText: '🚧 In Development',
      featured: true,
      url: 'shopverse.dev',
      features: [
        'User Authentication & Profiles',
        'Smart Shopping Cart',
        'Secure Payment Integration',
        'Real-time Order Tracking',
        'Product Recommendations',
        'Admin Dashboard'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe', 'Redux'],
      demoUrl: null,
      githubUrl: null,
      mockup: (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-1">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-cyber-blue/20 border border-cyber-blue/40 rounded p-1 h-8 flex items-center justify-center">
                <ShoppingCart size={12} className="text-cyber-blue" />
              </div>
            ))}
          </div>
          <div className="bg-cyber-green/20 border border-cyber-green/30 rounded p-2 flex items-center justify-between">
            <span className="text-cyber-green text-xs">Cart (3 items)</span>
            <CreditCard size={12} className="text-cyber-green" />
          </div>
        </div>
      )
    },
    {
      name: 'Portfolio Website',
      description: 'A futuristic portfolio website showcasing my skills and projects. Built with React, TypeScript, and Framer Motion for smooth animations.',
      type: 'web',
      status: 'live',
      statusText: '✅ Live',
      featured: false,
      url: 'sailikhithgb.dev',
      features: [
        'Futuristic Cyber Design',
        'Smooth Animations',
        'Responsive Layout',
        'SEO Optimized',
        'Interactive Elements',
        'Performance Optimized'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      demoUrl: '/',
      githubUrl: 'https://github.com/SailikhithGB/sai-likhith-portfolio',
      mockup: (
        <div className="space-y-2">
          <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 border border-cyber-blue/40 rounded p-2 text-center">
            <div className="text-xs text-cyber-blue">👨‍💻 Sai Likhith GB</div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-cyber-green/20 rounded p-1 text-center text-xs">About</div>
            <div className="bg-cyber-blue/20 rounded p-1 text-center text-xs">Projects</div>
            <div className="bg-cyber-purple/20 rounded p-1 text-center text-xs">Blog</div>
            <div className="bg-cyber-green/20 rounded p-1 text-center text-xs">Contact</div>
          </div>
        </div>
      )
    },
    {
      name: 'DevBlog Platform',
      description: 'A modern blogging platform for developers. Features markdown support, syntax highlighting, and real-time collaboration.',
      type: 'web',
      status: 'development',
      statusText: '🔧 Planning',
      featured: false,
      url: 'devblog.tech',
      features: [
        'Markdown Editor',
        'Syntax Highlighting',
        'Real-time Collaboration',
        'Comment System',
        'SEO Optimization',
        'Analytics Dashboard'
      ],
      tech: ['Next.js', 'MongoDB', 'Socket.io', 'Prisma', 'NextAuth', 'Vercel'],
      demoUrl: null,
      githubUrl: null,
      mockup: (
        <div className="space-y-2">
          <div className="bg-cyber-purple/20 border border-cyber-purple/40 rounded p-2 flex items-center gap-2">
            <FileText size={12} className="text-cyber-purple" />
            <span className="text-xs text-cyber-purple">New Article</span>
          </div>
          <div className="space-y-1">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-cyber-blue/10 border border-cyber-blue/20 rounded p-1 text-xs text-gray-400">
                Article {i}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      name: 'TaskFlow Mobile',
      description: 'A productivity mobile app for task management. Features offline sync, notifications, and team collaboration.',
      type: 'mobile',
      status: 'planning',
      statusText: '📱 Mobile App',
      featured: false,
      url: 'taskflow.app',
      features: [
        'Task Management',
        'Offline Sync',
        'Push Notifications',
        'Team Collaboration',
        'Time Tracking',
        'Analytics'
      ],
      tech: ['React Native', 'TypeScript', 'SQLite', 'Redux', 'Firebase'],
      demoUrl: null,
      githubUrl: null,
      mockup: (
        <div className="h-full bg-gradient-to-b from-cyber-dark to-black rounded-2xl p-2 space-y-1">
          <div className="bg-cyber-blue/20 rounded p-1 text-center text-xs text-cyber-blue">TaskFlow</div>
          <div className="space-y-1">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-cyber-green/10 border border-cyber-green/20 rounded p-1 text-xs flex items-center gap-1">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                <span className="text-gray-400">Task {i}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker relative overflow-hidden">
      <Navigation />
      
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
            className="text-center mb-16"
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
              What I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">Building</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-inter"
            >
              Crafting digital experiences that push boundaries and solve real problems
            </motion.p>
          </motion.div>

          {/* Project Stats */}
          <ProjectStats />

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-green/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/5 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 font-sora"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  More <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">Innovation</span> Coming Soon
                </motion.h2>
                
                <p className="text-xl text-gray-300 mb-8 font-inter">
                  I'm constantly pushing the boundaries of what's possible with code. 
                  Stay tuned for more projects that showcase the future of web development.
                </p>

                <div className="flex justify-center space-x-8 text-5xl mb-8">
                  {['🚀', '⚡', '🔥', '💻'].map((emoji, i) => (
                    <motion.span
                      key={emoji}
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2 + i * 0.5, 
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50 font-sora"
                >
                  <a href="/contact">
                    <MessageSquare className="mr-2" size={20} />
                    Let's Build Something Amazing
                  </a>
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Projects;
