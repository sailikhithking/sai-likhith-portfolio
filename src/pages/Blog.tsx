import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Heart, 
  Eye, 
  MessageCircle, 
  Share2,
  Bookmark,
  User,
  Hash,
  Zap,
  BookOpen,
  TrendingUp,
  Code,
  Lightbulb,
  Coffee
} from 'lucide-react';

// Enhanced blog card with animations
const BlogCard = ({ post, index }: { post: any, index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

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
    <motion.article
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
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-blue/30 rounded-3xl overflow-hidden relative group hover:border-cyber-blue/60 transition-all duration-500"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent"
          animate={{ x: isHovered ? [-400, 400] : 0 }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />

        {/* Cover Image */}
        <div className="relative h-48 bg-gradient-to-br from-cyber-blue/20 via-cyber-green/10 to-cyber-purple/20 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ backgroundImage: `url(${post.coverImage})` }}
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />
            
            {/* Floating icons based on post topic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-6xl opacity-20"
                animate={isHovered ? { 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
              >
                {post.categoryIcon}
              </motion.div>
            </div>

            {/* Animated particles */}
            {isHovered && (
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyber-blue rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -50],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <motion.div
              className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-lg ${
                post.status === 'published' 
                  ? 'bg-cyber-green/20 border-cyber-green/30 text-cyber-green'
                  : post.status === 'draft'
                  ? 'bg-cyber-blue/20 border-cyber-blue/30 text-cyber-blue'
                  : 'bg-cyber-purple/20 border-cyber-purple/30 text-cyber-purple'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {post.statusText}
            </motion.div>
          </div>

          {/* Reading time indicator */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="bg-cyber-dark/80 border border-cyber-blue/30 px-3 py-1 rounded-full text-xs text-cyber-blue backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Clock size={12} className="inline mr-1" />
              {post.readTime}
            </motion.div>
          </div>
        </div>

        <div className="p-6 relative z-10">
          {/* Category and date */}
          <div className="flex items-center justify-between mb-3">
            <motion.div
              className="flex items-center gap-2 text-sm text-cyber-blue"
              whileHover={{ x: 5 }}
            >
              <Hash size={14} />
              {post.category}
            </motion.div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Calendar size={14} />
              {post.date}
            </div>
          </div>

          <h2 className="text-xl font-bold mb-3 font-sora">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple">
              {post.title}
            </span>
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed font-inter line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-cyber-purple/20 border border-cyber-purple/40 px-2 py-1 rounded-full text-xs text-cyber-purple hover:bg-cyber-purple/30 transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  isLiked ? 'text-red-400' : 'hover:text-red-400'
                }`}
              >
                <Heart size={14} className={isLiked ? 'fill-current' : ''} />
                {post.likes + (isLiked ? 1 : 0)}
              </motion.button>
              
              <div className="flex items-center gap-1">
                <Eye size={14} />
                {post.views}
              </div>
              
              <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                {post.comments}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`transition-colors duration-200 ${
                  isBookmarked ? 'text-cyber-blue' : 'hover:text-cyber-blue'
                }`}
              >
                <Bookmark size={14} className={isBookmarked ? 'fill-current' : ''} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-cyber-green transition-colors duration-200"
              >
                <Share2 size={14} />
              </motion.button>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            asChild={post.status === 'published'}
            disabled={post.status !== 'published'}
            className={`w-full transition-all duration-300 ${
              post.status === 'published'
                ? 'bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-semibold transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50'
                : 'bg-gradient-to-r from-cyber-blue to-cyber-green opacity-50 cursor-not-allowed text-black font-semibold'
            }`}
          >
            {post.status === 'published' ? (
              <a href={post.url} className="flex items-center justify-center gap-2">
                <BookOpen size={16} />
                Read Article
                <ArrowRight size={16} />
              </a>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Clock size={16} />
                {post.statusText}
              </span>
            )}
          </Button>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%)',
            filter: 'blur(1px)',
          }}
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 4, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
      </motion.div>
    </motion.article>
  );
};

// Blog stats component
const BlogStats = () => {
  const stats = [
    { icon: BookOpen, label: 'Articles Written', value: '12+' },
    { icon: Eye, label: 'Total Views', value: '5K+' },
    { icon: Heart, label: 'Total Likes', value: '500+' },
    { icon: User, label: 'Subscribers', value: '100+' },
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
          className="bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-lg border border-cyber-green/30 rounded-2xl p-4 text-center hover:border-cyber-green/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/20"
        >
          <div className="flex justify-center mb-2">
            <div className="p-2 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg">
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

const Blog = () => {
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

  const blogPosts = [
    {
      title: 'How I Became a Full-Stack Developer at 16',
      excerpt: 'My complete journey from writing my first "Hello World" in Python at 13 to building complex MERN stack applications. The challenges, breakthroughs, and lessons that shaped my coding career.',
      category: 'Journey',
      categoryIcon: '🚀',
      date: 'Nov 2024',
      readTime: '8 min read',
      status: 'published',
      statusText: '✨ Featured',
      likes: 142,
      views: '2.1K',
      comments: 23,
      tags: ['Career', 'Learning', 'MERN Stack', 'Python'],
      coverImage: '/blog/journey-cover.jpg',
      url: 'https://dev.to/sailikhith_gb_d4e7440980/how-i-became-a-full-stack-developer-at-16'
    },
    {
      title: 'Learning to Code from YouTube Reels',
      excerpt: 'How short-form content changed my learning approach. From 15-second coding tips to building full applications - the unconventional path that actually works for Gen Z developers.',
      category: 'Learning',
      categoryIcon: '📱',
      date: 'Oct 2024',
      readTime: '6 min read',
      status: 'published',
      statusText: '🔥 Trending',
      likes: 89,
      views: '1.5K',
      comments: 15,
      tags: ['Learning', 'Social Media', 'Tips', 'Beginner'],
      coverImage: '/blog/reels-cover.jpg',
      url: 'https://hashnode.com/@sailikhithgb'
    },
    {
      title: 'Building ShopVerse: My First Production App',
      excerpt: 'The complete technical breakdown of building a modern e-commerce platform. From architecture decisions to deployment challenges - everything I learned building my first real-world application.',
      category: 'Project',
      categoryIcon: '🛒',
      date: 'Coming Soon',
      readTime: '12 min read',
      status: 'draft',
      statusText: '📝 In Progress',
      likes: 0,
      views: '0',
      comments: 0,
      tags: ['React', 'Node.js', 'MongoDB', 'E-commerce', 'MERN'],
      coverImage: '/blog/shopverse-cover.jpg',
      url: '#'
    },
    {
      title: 'The Future of Web Development in 2025',
      excerpt: 'My predictions and insights on emerging web technologies. AI-powered development, WebAssembly, edge computing, and what young developers should focus on learning next.',
      category: 'Technology',
      categoryIcon: '🔮',
      date: 'Coming Soon',
      readTime: '10 min read',
      status: 'draft',
      statusText: '🔬 Research',
      likes: 0,
      views: '0',
      comments: 0,
      tags: ['Future Tech', 'Web Development', 'AI', 'Predictions'],
      coverImage: '/blog/future-cover.jpg',
      url: '#'
    },
    {
      title: '5 GitHub Repositories Every Developer Should Star',
      excerpt: 'A curated list of game-changing open source projects that transformed my development workflow. From productivity tools to learning resources - these repos are pure gold.',
      category: 'Resources',
      categoryIcon: '⭐',
      date: 'Coming Soon',
      readTime: '7 min read',
      status: 'planned',
      statusText: '📋 Planned',
      likes: 0,
      views: '0',
      comments: 0,
      tags: ['GitHub', 'Open Source', 'Tools', 'Resources'],
      coverImage: '/blog/github-cover.jpg',
      url: '#'
    },
    {
      title: 'My Development Setup at 16',
      excerpt: 'Complete breakdown of my coding environment, tools, and workflow. From VSCode extensions to deployment strategies - everything I use to build modern web applications efficiently.',
      category: 'Setup',
      categoryIcon: '⚙️',
      date: 'Coming Soon',
      readTime: '9 min read',
      status: 'planned',
      statusText: '🎬 Video Coming',
      likes: 0,
      views: '0',
      comments: 0,
      tags: ['Setup', 'Tools', 'Productivity', 'VSCode'],
      coverImage: '/blog/setup-cover.jpg',
      url: '#'
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyber-green rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyber-blue rounded-full blur-3xl opacity-10" />
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
                  '0 0 10px #00ff88',
                  '0 0 20px #00ff88, 0 0 30px #00ff88',
                  '0 0 10px #00ff88'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-inter"
            >
              Sharing my journey, insights, and lessons learned in the world of technology
            </motion.p>
          </motion.div>

          {/* Blog Stats */}
          <BlogStats />

          {/* Featured categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {['All', 'Journey', 'Learning', 'Projects', 'Technology', 'Resources'].map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-cyber-green to-cyber-blue text-black'
                    : 'bg-cyber-dark/50 border border-cyber-green/30 text-cyber-green hover:bg-cyber-green/20 hover:border-cyber-green/60'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-16"
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
                  Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple">Updated</span>
                </motion.h2>
                
                <p className="text-xl text-gray-300 mb-8 font-inter">
                  Be the first to read my latest articles on coding, tech insights, and my journey as India's youngest full-stack developer.
                </p>

                <div className="max-w-md mx-auto">
                  <div className="bg-cyber-dark/50 backdrop-blur-lg border border-cyber-green/30 rounded-full p-2 mb-4 flex">
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none font-inter"
                    />
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-blue hover:to-cyber-green text-black font-semibold rounded-full px-6"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400">
                    Join 100+ developers getting weekly insights
                  </p>
                </div>

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
                    <Coffee className="w-8 h-8" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-blue/30 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-4 font-sora"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Want to Collaborate?
                </motion.h2>
                
                <p className="text-gray-300 mb-6 font-inter">
                  Have a story idea or want to guest post? Let's create something amazing together.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50 font-sora"
                >
                  <a href="/contact">
                    <Lightbulb className="mr-2" size={20} />
                    Let's Connect
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

export default Blog;
