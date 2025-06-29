
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Instagram, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sailikhithking',
      icon: Github,
      color: 'hover:text-cyber-blue',
      description: 'Check out my code repositories'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-likhith-g-b-180b332a4',
      icon: Linkedin,
      color: 'hover:text-cyber-green',
      description: 'Connect professionally'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sai_likhith_2009',
      icon: Instagram,
      color: 'hover:text-cyber-purple',
      description: 'Follow my journey'
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's collaborate, build, and innovate. Don't hesitate to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Let's Connect</h2>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in tech. Whether you have a project idea, want to discuss opportunities, or just want to say hi, I'd love to hear from you!
                </p>
              </div>

              {/* Location */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cyber-blue/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Location</h3>
                      <p className="text-gray-300">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cyber-green/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-cyber-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">youremail@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
                <div className="grid gap-4">
                  {socialLinks.map((social) => (
                    <Card key={social.name} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-4">
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group"
                        >
                          <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-all duration-300">
                            <social.icon className={`w-5 h-5 text-gray-300 ${social.color} transition-colors duration-300`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white group-hover:text-cyber-blue transition-colors duration-300">
                              {social.name}
                            </h4>
                            <p className="text-sm text-gray-400">{social.description}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-gray-400 mt-4 text-center italic">
                  "Let's collaborate, build, and innovate. Don't hesitate to reach out."
                </p>
              </div>

              {/* Illustration */}
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-cyber-blue/20 to-cyber-green/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="relative">
                    {/* Laptop */}
                    <div className="w-24 h-16 bg-gray-800 rounded-lg border border-gray-600 relative">
                      <div className="w-20 h-12 bg-cyber-blue/30 rounded-sm m-2 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-cyber-blue animate-pulse" />
                      </div>
                    </div>
                    {/* Person silhouette */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-300 mb-2 block">
                          First Name
                        </Label>
                        <Input
                          type="text"
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300 mb-2 block">
                          Last Name  
                        </Label>
                        <Input
                          type="text"
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block">
                        Email
                      </Label>
                      <Input
                        type="email"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block">
                        Subject
                      </Label>
                      <Input
                        type="text"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20 resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Animated typing indicator */}
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-cyber-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm">Ready to connect</span>
              </div>
            </div>
          </div>

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

export default Contact;
