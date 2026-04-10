import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

import {
  Shield,
  Zap,
  Lock,
  Globe,
  Eye,
  Wifi,
  Laptop,
  Star,
  CheckCircle,
  Apple,
  Download,
  Server,
  Users,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Gauge,
  UserCheck,
  Inbox,
  Cpu,
  Radio,
  AlertCircle,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { AppMockup } from "../components/AppMockup";
import { RegionShowcase } from "../components/RegionShowcase";
import { SpeedTest } from "../components/SpeedTest";
import { ConnectionSimulator } from "../components/ConnectionSimulator";

import { ServerMap } from "../components/ServerMap";

// Only import components that definitely exist
import { ScrollReveal } from "../components/ScrollReveal";

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Mockup carousel state
  const [mockupIndex, setMockupIndex] = useState(0);
  const mockups = [
    {
      title: "One-Tap Connect",
      description: "Experience ultra-fast VPN connection with a single tap",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=360&h=720&fit=crop",
      features: ["Auto-connect to fastest server", "Instant connection", "Real-time speed indicator"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Global Server Network",
      description: "Access 60+ servers in 95+ countries worldwide",
      image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=360&h=720&fit=crop",
      features: ["Real-time server speeds", "Ping indicator", "Smart location selection"],
      color: "from-emerald-500/20 to-green-500/20",
    },
    {
      title: "Live Analytics",
      description: "Monitor your connection stats and data usage in real-time",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=360&h=720&fit=crop",
      features: ["Connection speed dashboard", "Data usage tracking", "Security alerts"],
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Advanced Security",
      description: "Military-grade encryption with advanced privacy controls",
      image: "https://images.unsplash.com/photo-1563986768609-2f477828d6f7?w=360&h=720&fit=crop",
      features: ["Kill switch protection", "DNS leak blocking", "Protocol selection"],
      color: "from-violet-500/20 to-purple-500/20",
    },
  ];

  const nextMockup = () => {
    setMockupIndex((prev) => (prev + 1) % mockups.length);
  };

  const prevMockup = () => {
    setMockupIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section with Abstract Background */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/30 to-pink-500/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 50, -100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/15 rounded-full mix-blend-screen filter blur-3xl"
            animate={{
              x: [0, 50, -80, 0],
              y: [0, 80, -50, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.1) 25%, rgba(124, 58, 237, 0.1) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.1) 75%, rgba(124, 58, 237, 0.1) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.1) 25%, rgba(124, 58, 237, 0.1) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.1) 75%, rgba(124, 58, 237, 0.1) 76%, transparent 77%, transparent)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Badge with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full mb-8 hover:border-cyan-500/60 transition-all duration-300"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </motion.span>
              
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Your Privacy,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              BlockChain-grade encryption, lightning-fast speeds, and zero-logs guarantee. Secure your digital life with
              Kestrel VPN — trusted by privacy advocates worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/pricing">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 shadow-2xl shadow-cyan-500/30 hover:shadow-3xl hover:shadow-cyan-500/50 transition-all duration-300 text-white font-bold text-lg px-10 py-6 border-0"
                  >
                    Get Started Free
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2 text-xl"
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="border-2 border-cyan-500/50 hover:border-cyan-400 bg-transparent hover:bg-cyan-500/10 backdrop-blur-xl text-white font-bold text-lg px-10 py-6 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-16"
            >
              {[
                { icon: Shield, text: "No-logs policy" },
                { icon: Zap, text: "256-bit AES Encryption" },
                { icon: Globe, text: "95+ Countries" },
                { icon: Award, text: "30-day Money-back" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <badge.icon className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-slate-300">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* App Mockups Showcase Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-cyan-500/20 to-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/10 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [180, 90, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6 backdrop-blur-xl"
            >
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                App Preview
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Powerful Features,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Beautiful Design
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Experience our sleek mobile app engineered for speed, security, and simplicity. Swipe to explore key features.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mockup Device */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Ambient glow */}
                <div className={`absolute -inset-8 bg-gradient-to-br ${mockups[mockupIndex].color} rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Phone Frame */}
                <div className="relative w-80 h-[640px] rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 p-3 shadow-2xl border border-cyan-500/20 overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-950 rounded-b-3xl z-20" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden relative">
                    <motion.div
                      key={mockupIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img
                        src={mockups[mockupIndex].image}
                        alt={mockups[mockupIndex].title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/360x720/0f1929/00d4ff?text=VPN+App";
                        }}
                      />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
                  </div>

                  {/* Corner reflections */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/3 rounded-full blur-2xl" />
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.15, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevMockup}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 hover:border-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all backdrop-blur-xl shadow-lg"
                >
                  <ChevronLeft className="h-7 w-7 text-cyan-400" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextMockup}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 hover:border-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all backdrop-blur-xl shadow-lg"
                >
                  <ChevronRight className="h-7 w-7 text-cyan-400" />
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {mockups.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setMockupIndex(index)}
                      className={`transition-all ${
                        index === mockupIndex
                          ? "bg-gradient-to-r from-cyan-400 to-blue-400 w-8 h-3 shadow-lg shadow-cyan-500/40"
                          : "bg-white/20 hover:bg-white/30 w-3 h-3"
                      } rounded-full`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Features Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {mockups[mockupIndex].title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {mockups[mockupIndex].description}
                </p>
              </motion.div>

              {/* Feature List */}
              <div className="space-y-3">
                {mockups[mockupIndex].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group hover:bg-cyan-500/15"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/10 group-hover:from-cyan-500/30 group-hover:to-blue-500/20 transition-all">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-6"
              >
                <Link to="/pricing">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-xl shadow-cyan-500/30 text-white font-bold px-8 py-6 text-lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Now
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
        
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "5M+", label: "Active Users" },
                { icon: Server, value: "60+", label: "Global Servers" },
                { icon: Globe, value: "95+", label: "Countries" },
                { icon: Award, value: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="p-6 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-3 bg-cyan-500/10 rounded-xl mb-4"
                    >
                      <stat.icon className="h-8 w-8 text-cyan-400" />
                    </motion.div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/15 to-pink-500/10 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6 backdrop-blur-xl"
            >
              <Zap className="h-4 w-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Premium Features
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Why Choose Kestrel?
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Advanced VPN features engineered for maximum privacy, performance, and peace of mind
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Military-Grade Encryption",
                description: "AES-256 encryption with perfect forward secrecy protection.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: <Gauge className="h-8 w-8" />,
                title: "Lightning-Fast Speeds",
                description: "Optimized servers with minimal latency for seamless streaming.",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Strict No-Logs Policy",
                description: "Zero tracking, zero collection — your privacy is sacrosanct.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Coverage",
                description: "60+ servers across 95+ countries for unrestricted access.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: <Wifi className="h-8 w-8" />,
                title: "Public Wi-Fi Protection",
                description: "Automatic encryption on unsecured networks.",
                gradient: "from-rose-500 to-orange-500",
              },
              {
                icon: <Laptop className="h-8 w-8" />,
                title: "Multi-Device Support",
                description: "Protect 10+ devices simultaneously with one subscription.",
                gradient: "from-orange-500 to-yellow-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="relative h-full p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 overflow-hidden hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`relative z-10 inline-flex p-4 bg-gradient-to-br ${feature.gradient}/20 rounded-2xl mb-6 text-white group-hover:text-white transition-all`}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="relative z-10 text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Get Started in Seconds
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Three simple steps to secure your entire digital life
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {[
              {
                step: "01",
                title: "Choose Your Plan",
                description: "Pick the perfect plan for your needs. All plans include our 30-day money-back guarantee.",
                icon: <TrendingUp className="h-12 w-12" />,
                color: "from-cyan-500 to-blue-500",
              },
              {
                step: "02",
                title: "Download & Install",
                description: "Get our app in seconds. Available on iOS, Android, Windows, Mac, and Linux.",
                icon: <Download className="h-12 w-12" />,
                color: "from-blue-500 to-purple-500",
              },
              {
                step: "03",
                title: "Connect & Enjoy",
                description: "One tap to connect. Browse privately, securely, and without restrictions.",
                icon: <Shield className="h-12 w-12" />,
                color: "from-purple-500 to-pink-500",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative p-8 h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                    <motion.div
                      className={`absolute top-0 right-0 text-8xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                      animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index }}
                    >
                      {step.step}
                    </motion.div>

                    <div className="relative z-10">
                      <motion.div
                        className={`inline-flex p-4 bg-gradient-to-br ${step.color}/20 rounded-2xl mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {step.icon}
                      </motion.div>

                      <div className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3 tracking-wide`}>
                        STEP {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



       {/* App Mockup Section */}
      <AppMockup />
{/* Interactive Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Try Our VPN Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power and performance of Kestrel VPN
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-1 ">
            <ScrollReveal delay={0.1}>
              <SpeedTest />
            </ScrollReveal>
            
          </div>
        </div>
      </section>
  {/* Server Map */}
      <ServerMap />
    

      {/* Region Showcase */}
      <RegionShowcase />

      {/* Download Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Download Kestrel VPN
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Available on all major platforms
            </p>
          </ScrollReveal>
<div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
            {[
              { name: "Windows", icon: Download, platform: "Windows 10 & 11", color: "from-blue-500 to-cyan-500" },
              { name: "macOS", icon: Apple, platform: "10.14+", color: "from-gray-500 to-slate-500" },
              { name: "iOS", icon: Apple, platform: "iOS 13+", color: "from-black to-gray-700" },

            ].map((download, index) => (
              <motion.div
                key={download.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Card className={`relative p-8 text-center bg-gradient-to-br ${download.color}/15 border border-slate-700/50 hover:border-slate-600/80 transition-all hover:shadow-2xl cursor-pointer overflow-hidden group`}>
                    <motion.div
                      className={`flex justify-center mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`p-4 bg-gradient-to-br ${download.color}/30 rounded-2xl`}>
                        <download.icon className="h-10 w-10" />
                      </div>
                    </motion.div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      {download.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      {download.platform}
                    </p>
                    <Button
                      className={`w-full bg-gradient-to-r ${download.color} hover:shadow-lg transition-all text-white font-bold`}
                      size="sm"
                    >
                      <download.icon className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              className="inline-flex p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl mb-8 border border-cyan-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img src="/logo.png" className="h-16 w-16 text-cyan-400" />
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Ready to Own Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Privacy?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 5M+ users worldwide who trust Kestrel VPN. 30-day money-back guarantee. No questions asked.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 shadow-2xl shadow-cyan-500/40 hover:shadow-3xl text-white font-bold text-lg px-10 py-7 border-0"
                  >
                    Get Started Now
                    <motion.span
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-3 text-2xl"
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    size="lg"
                    className="border-2 border-cyan-500/50 hover:border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 backdrop-blur-xl text-white font-bold text-lg px-10 py-7 transition-all duration-300"
                  >
                    Contact Sales
                  </Button>
                </motion.div>
              </Link>
            </div>

            <p className="text-slate-500 mt-8 text-sm">
              ✓ No credit card required • ✓ Cancel anytime • ✓ 24/7 Support
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
