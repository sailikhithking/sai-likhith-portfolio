import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle,
  Phone,
  Calendar,
  Globe,
  Coffee,
  Code,
  Heart,
  Zap,
  Star,
  Rocket,
  Download,
  Users,
  Briefcase
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import Confetti from 'react-confetti';
import emailjs from '@emailjs/browser';

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

// Floating social icon component
const FloatingSocialIcon = ({ icon: Icon, href, color, delay }: { 
  icon: any, 
  href: string, 
  color: string, 
  delay: number 
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`fixed z-20 p-3 bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-lg border border-cyber-blue/30 rounded-full hover:border-cyber-blue/60 transition-all duration-300 ${color}`}
    style={{
      right: '2rem',
      top: `${20 + delay * 8}%`,
    }}
    animate={{
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 3 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={20} />
  </motion.a>
);

// Contact stats component
const ContactStats = () => {
  const stats = [
    { icon: MessageCircle, label: 'Messages Replied', value: '100%' },
    { icon: Calendar, label: 'Response Time', value: '<24h' },
    { icon: Users, label: 'Collaborations', value: '10+' },
    { icon: Coffee, label: 'Coffee Chats', value: '25+' },
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
          className="bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-lg border border-cyber-purple/30 rounded-2xl p-4 text-center hover:border-cyber-purple/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/20"
        >
          <div className="flex justify-center mb-2">
            <div className="p-2 bg-gradient-to-br from-cyber-purple to-cyber-blue rounded-lg">
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

// Success animation component
const SuccessAnimation = ({ show, onComplete }: { show: boolean, onComplete: () => void }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onComplete, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 50, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.8 }}
              className="bg-gradient-to-r from-cyber-dark/90 to-cyber-darker/90 backdrop-blur-xl border border-cyber-green/50 rounded-3xl p-8 max-w-md mx-4 text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-black" />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-white mb-4 font-sora"
                >
                  Message Sent Successfully!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 mb-6 font-inter"
                >
                  Thank you for reaching out! I'll get back to you within 24 hours.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center space-x-4 text-4xl"
                >
                  {['🚀', '✨', '💫'].map((emoji, i) => (
                    <motion.span
                      key={emoji}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Option 1: EmailJS Integration (Recommended for quick setup)
      // You'll need to:
      // 1. Create account at https://www.emailjs.com/
      // 2. Create email service and template
      // 3. Replace these IDs with your actual EmailJS credentials
      
      const emailJSConfig = {
        serviceId: 'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        templateId: 'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
      };

      // Check if EmailJS is configured
      if (emailJSConfig.serviceId === 'YOUR_SERVICE_ID') {
        // Fallback: Log to console and show success (for demo purposes)
        console.log('📧 Contact Form Data:', {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          subject: data.subject,
          message: data.message,
          timestamp: new Date().toISOString()
        });
        
        // Simulate email sending for demo
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        toast.success('Demo mode: Message logged to console!');
        console.log('🎯 To enable real email sending, configure EmailJS credentials in Contact.tsx');
        
      } else {
        // Real EmailJS integration
        const templateParams = {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'codewithsailikhith@gmail.com' // Your email
        };

        await emailjs.send(
          emailJSConfig.serviceId,
          emailJSConfig.templateId,
          templateParams,
          emailJSConfig.publicKey
        );
        
        toast.success('Message sent successfully!');
      }
      
      setShowSuccess(true);
      reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SailikhithGB',
      icon: Github,
      color: 'hover:text-cyber-blue',
      description: 'Check out my code repositories',
      count: '15+ repos'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-likhith-g-b-180b332a4',
      icon: Linkedin,
      color: 'hover:text-cyber-green',
      description: 'Connect professionally',
      count: '500+ connections'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sai_likhith_2009/',
      icon: Instagram,
      color: 'hover:text-cyber-purple',
      description: 'Follow my journey',
      count: '1K+ followers'
    }
  ];

  const quickActions = [
    {
      title: 'Download Resume',
      description: 'Get my latest CV with all projects and skills',
      icon: Download,
      action: () => window.open('/resume.pdf', '_blank'),
      color: 'cyber-blue'
    },
    {
      title: 'Schedule a Call',
      description: 'Book a 30-minute coffee chat to discuss opportunities',
      icon: Calendar,
      action: () => window.open('https://calendly.com/sailikhithgb', '_blank'),
      color: 'cyber-green'
    },
    {
      title: 'Hire Me',
      description: 'Ready to work on your next big project',
      icon: Briefcase,
      action: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'cyber-purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker relative overflow-hidden">
      <Navigation />
      
      {/* Floating social icons */}
      <FloatingSocialIcon icon={Github} href="https://github.com/SailikhithGB" color="hover:text-cyber-blue" delay={0} />
      <FloatingSocialIcon icon={Linkedin} href="https://www.linkedin.com/in/sai-likhith-g-b-180b332a4" color="hover:text-cyber-green" delay={1} />
      <FloatingSocialIcon icon={Instagram} href="https://www.instagram.com/sai_likhith_2009/" color="hover:text-cyber-purple" delay={2} />

      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          x: useTransform(springX, (value) => value / 50),
          y: useTransform(springY, (value) => value / 50),
        }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-blue rounded-full blur-3xl opacity-10" />
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
                  '0 0 10px #8b5cf6',
                  '0 0 20px #8b5cf6, 0 0 30px #8b5cf6',
                  '0 0 10px #8b5cf6'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-green">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-inter"
            >
              Let's collaborate, build, and innovate together. Ready to create something amazing?
            </motion.p>
          </motion.div>

          {/* Contact Stats */}
          <ContactStats />

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
                className={`bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-xl border border-${action.color}/30 rounded-3xl p-6 text-left hover:border-${action.color}/60 transition-all duration-300 hover:shadow-lg hover:shadow-${action.color}/20`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${action.color} to-cyber-blue rounded-xl flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-sora">{action.title}</h3>
                <p className="text-gray-300 font-inter">{action.description}</p>
              </motion.button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white font-sora">Let's Connect</h2>
                <p className="text-gray-300 text-lg mb-8 font-inter">
                  I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in tech. 
                  Whether you have a project idea, want to discuss opportunities, or just want to say hi, I'd love to hear from you!
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-xl border border-cyber-blue/30 rounded-2xl p-6 hover:border-cyber-blue/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-cyber-blue/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Location</h3>
                      <p className="text-gray-300">Bengaluru, Karnataka, India 🇮🇳</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-xl border border-cyber-green/30 rounded-2xl p-6 hover:border-cyber-green/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-cyber-green/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-cyber-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">codewithsailikhith@gmail.com</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-white font-sora">Follow My Journey</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="bg-gradient-to-r from-cyber-dark/80 to-cyber-darker/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300"
                    >
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 p-4 group"
                      >
                        <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-all duration-300">
                          <social.icon className={`w-5 h-5 text-gray-300 ${social.color} transition-colors duration-300`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white group-hover:text-cyber-blue transition-colors duration-300">
                            {social.name}
                          </h4>
                          <p className="text-sm text-gray-400">{social.description}</p>
                        </div>
                        <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                          {social.count}
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 3D Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-64 h-64 bg-gradient-to-br from-cyber-blue/20 via-cyber-green/10 to-cyber-purple/20 rounded-3xl flex items-center justify-center border border-cyber-blue/30 backdrop-blur-lg relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/10 to-transparent"
                    animate={{ x: [-300, 300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      💬
                    </motion.div>
                    <p className="text-cyber-blue font-sora font-semibold">Let's Chat!</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              id="contact-form"
            >
              <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-purple/30 rounded-3xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-purple/5 to-transparent"
                  animate={{ x: [-400, 400] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white font-sora">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-300 mb-2 block font-inter">First Name</Label>
                        <Input 
                          {...register('firstName')}
                          type="text" 
                          className="bg-cyber-dark/50 border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20 font-inter" 
                          placeholder="Your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-gray-300 mb-2 block font-inter">Last Name</Label>
                        <Input 
                          {...register('lastName')}
                          type="text" 
                          className="bg-cyber-dark/50 border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20 font-inter" 
                          placeholder="Your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block font-inter">Email</Label>
                      <Input 
                        {...register('email')}
                        type="email" 
                        className="bg-cyber-dark/50 border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20 font-inter" 
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block font-inter">Subject</Label>
                      <Input 
                        {...register('subject')}
                        type="text" 
                        className="bg-cyber-dark/50 border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20 font-inter" 
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block font-inter">Message</Label>
                      <Textarea 
                        {...register('message')}
                        rows={5} 
                        className="bg-cyber-dark/50 border-cyber-blue/30 text-white placeholder-gray-400 focus:border-cyber-blue focus:ring-cyber-blue/20 resize-none font-inter" 
                        placeholder="Tell me about your project or just say hello!"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-cyber-green hover:to-cyber-blue text-black font-bold py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/50 font-sora"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <Zap size={18} />
                        </motion.div>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Animated typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 flex items-center justify-center gap-2 text-gray-400"
              >
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-cyber-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm font-inter">Ready to connect</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-cyber-dark/80 via-cyber-darker/60 to-cyber-dark/80 backdrop-blur-xl border border-cyber-green/30 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/5 to-transparent"
                animate={{ x: [-400, 400] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-4 font-sora"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Ready to Build the Future Together?
                </motion.h2>
                
                <p className="text-gray-300 mb-6 font-inter">
                  "Remember the name: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple font-bold">Sai Likhith GB</span> — the youngest full-stack developer building India's tech future."
                </p>

                <div className="flex justify-center">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity }
                    }}
                    className="text-cyber-green"
                  >
                    <Heart className="w-8 h-8" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Success Animation */}
      <SuccessAnimation 
        show={showSuccess} 
        onComplete={() => setShowSuccess(false)} 
      />
    </div>
  );
};

export default Contact;