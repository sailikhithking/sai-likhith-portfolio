
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How I Started Coding at 13',
      excerpt: 'My journey from complete beginner to building my first Python script. The challenges, breakthroughs, and lessons learned along the way.',
      date: 'Coming Soon',
      readTime: '5 min read',
      status: 'draft'
    },
    {
      title: 'Why I\'m Building ShopVerse at 16',
      excerpt: 'The story behind my latest project - an e-commerce platform built with the MERN stack. From concept to code.',
      date: 'Coming Soon', 
      readTime: '7 min read',
      status: 'draft'
    },
    {
      title: 'What Every Teen Should Know About Tech',
      excerpt: 'Essential advice for young developers starting their coding journey. Tools, resources, and mindset tips that actually matter.',
      date: 'Coming Soon',
      readTime: '6 min read', 
      status: 'draft'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sharing my journey, insights, and lessons learned in tech
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-cyber-blue/20 border border-cyber-blue/30 px-3 py-1 rounded-full text-xs font-medium text-cyber-blue">
                      {post.status === 'draft' ? 'Coming Soon' : 'Published'}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    disabled={post.status === 'draft'}
                    variant="ghost" 
                    className={`w-full ${post.status === 'draft' 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-cyber-blue/20 hover:text-cyber-blue'
                    }`}
                  >
                    {post.status === 'draft' ? 'Coming Soon' : 'Read More'}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-cyber-blue/10 via-cyber-green/10 to-cyber-purple/10 border border-white/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be the first to know when I publish new articles about coding, tech insights, and my journey as a young developer.
            </p>
            <div className="max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <Button 
                disabled
                className="w-full bg-gradient-to-r from-cyber-blue to-cyber-green text-black font-semibold opacity-50 cursor-not-allowed"
              >
                Notify Me (Coming Soon)
              </Button>
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

export default Blog;
