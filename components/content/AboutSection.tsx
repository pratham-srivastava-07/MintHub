"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Clock, Zap, DollarSign, Layout, Shield, Code, Rocket, Users } from "lucide-react";

export default function EnhancedAboutSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsCount, setStatsCount] = useState({ users: 0, mints: 0, volume: 0 });
  const { scrollYProgress } = useScroll();
  
  const xPos = useTransform(scrollYProgress, [0, 0.3], ["-10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  // Simulate stat counter animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStatsCount(prev => ({
          users: prev.users >= 17500 ? 17500 : prev.users + 500,
          mints: prev.mints >= 850000 ? 850000 : prev.mints + 25000,
          volume: prev.volume >= 125 ? 125 : prev.volume + 5,
        }));
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Features data with enhanced information
  const features = [
    {
      title: "Blazing Fast Minting",
      description: "Mint tokens on Solana in less than 0.5 seconds. Our optimized smart contracts and parallel processing deliver unprecedented speed.",
      icon: <Zap size={24} />,
      color: "from-blue-600 to-cyan-500",
      stats: [
        { value: "400ms", label: "Average mint time" },
        { value: "10,000+", label: "Transactions per second" }
      ],
      animation: "fade-right"
    },
    {
      title: "Micro Transaction Fees",
      description: "Pay as little as $0.001 per mint. Our fee optimization engine automatically finds the best transaction paths for minimal costs.",
      icon: <DollarSign size={24} />,
      color: "from-green-500 to-emerald-500",
      stats: [
        { value: "$0.001", label: "Average fee per mint" },
        { value: "99.7%", label: "Cost reduction vs ETH" }
      ],
      animation: "fade-up"
    },
    {
      title: "Intuitive Interface",
      description: "Designed for everyone from beginners to expert developers. Our drag-and-drop builder makes complex minting accessible to all skill levels.",
      icon: <Layout size={24} />,
      color: "from-purple-600 to-violet-500",
      stats: [
        { value: "5 min", label: "Avg. onboarding time" },
        { value: "92%", label: "User satisfaction" }
      ],
      animation: "fade-left"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and multi-layered security protocols keep your assets safe. Regular audits by leading blockchain security firms.",
      icon: <Shield size={24} />,
      color: "from-red-500 to-orange-500",
      stats: [
        { value: "6", label: "Security audits completed" },
        { value: "0", label: "Security incidents" }
      ],
      animation: "fade-up"
    },
    {
      title: "Developer Toolkit",
      description: "Comprehensive APIs, SDKs, and documentation enable seamless integration with your existing systems and workflows.",
      icon: <Code size={24} />,
      color: "from-indigo-600 to-blue-500",
      stats: [
        { value: "25+", label: "API endpoints" },
        { value: "8", label: "SDK languages supported" }
      ],
      animation: "fade-up"
    },
  ];

  // Ecosystem integrations
  const integrations = [
    { name: "Phantom", logo: "/image.webp" },
    { name: "Solflare", logo: "/solflare.webp" },
    { name: "Magic Eden", logo: "/magiceden.webp" },
    { name: "Orca", logo: "/orca.webp" },
    { name: "Jupiter", logo: "/jupiter.webp" },
    { name: "Metaplex", logo: "/metaplex.webp" },
  ];

  // Timeline milestones
  const milestones = [
    {
      date: "June 2022",
      title: "MintHub Founded",
      description: "Started with a vision to make Solana minting accessible to everyone"
    },
    {
      date: "December 2022",
      title: "$3.5M Seed Round",
      description: "Led by Solana Ventures with participation from top crypto investors"
    },
    {
      date: "March 2023",
      title: "Public Beta Launch",
      description: "Opened platform to early adopters, reaching 10,000 users in first month"
    },
    {
      date: "September 2023",
      title: "Enterprise API Release",
      description: "Launched developer toolkit enabling business integrations"
    },
    {
      date: "February 2024",
      title: "1 Million Mints Milestone",
      description: "Celebrated one million successful mints on our platform"
    },
  ];
  
  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  // Automatically cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black min-h-screen overflow-hidden">
      {/* Hero Section with Particle Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
                animate={{
                  x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mb-8"
            >
              <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-3 py-1 text-sm rounded-full">
                Redefining Solana Minting
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Future of <span className="relative">
                <span className="relative z-10">Minting</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-500/30 rounded-sm z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              MintHub empowers creators, developers, and enterprises to mint at scale with unparalleled speed, security, and simplicity on Solana.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)" }}
                className="rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-700/30"
              >
                Start Building Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-md border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm px-8 py-3.5 text-base font-medium text-indigo-300"
              >
                Watch Demo <ChevronRight className="ml-1 inline-block h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="bg-gradient-to-b from-indigo-950/20 to-transparent py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-black/40 backdrop-blur-sm p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white mb-1">{statsCount.users.toLocaleString()}+</div>
              <div className="text-indigo-300 flex items-center justify-center gap-2">
                <Users size={18} />
                <span>Active Users</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-black/40 backdrop-blur-sm p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white mb-1">{statsCount.mints.toLocaleString()}+</div>
              <div className="text-indigo-300 flex items-center justify-center gap-2">
                <Rocket size={18} />
                <span>Tokens Minted</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-black/40 backdrop-blur-sm p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white mb-1">${statsCount.volume.toLocaleString()}M+</div>
              <div className="text-indigo-300 flex items-center justify-center gap-2">
                <DollarSign size={18} />
                <span>Transaction Volume</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Features with Interactive Cards */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            style={{ x: xPos, opacity }}
            className="mx-auto max-w-2xl text-center"
          >
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-3 py-1 text-sm rounded-full">
              Core Capabilities
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Why Leading Projects Choose MintHub
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Our enterprise-grade infrastructure powers some of the most demanding projects in the Solana ecosystem.
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Feature Navigation */}
              <div className="lg:col-span-4 space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveFeature(index)}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? `bg-gradient-to-r ${feature.color} bg-opacity-20 border border-white/10`
                        : "bg-black/20 hover:bg-black/40"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 rounded-lg p-2.5 bg-gradient-to-br ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          activeFeature === index ? "text-white" : "text-gray-300"
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      {activeFeature === index && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="ml-auto text-white"
                        >
                          <ChevronRight size={16} />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Feature Detail */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full"
                  >
                    <div className={`h-2 bg-gradient-to-r ${features[activeFeature].color}`} />
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {features[activeFeature].title}
                          </h3>
                          <p className="text-gray-300 mb-6">
                            {features[activeFeature].description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {features[activeFeature].stats.map((stat, idx) => (
                              <div key={idx} className="bg-black/30 rounded-lg p-4">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className={`rounded-lg bg-gradient-to-r ${features[activeFeature].color} px-5 py-2.5 text-sm font-medium text-white shadow-lg`}
                          >
                            Learn More
                          </motion.button>
                        </div>
                        
                        <div className="w-full md:w-64 h-64 flex-shrink-0 relative bg-black/40 rounded-xl overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/60 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <div className={`text-6xl flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br ${features[activeFeature].color} shadow-lg shadow-indigo-500/30`}>
                              {features[activeFeature].icon}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Integration */}
      <div className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-3 py-1 text-sm rounded-full">
              Ecosystem
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Seamlessly Integrated
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Connect with the entire Solana ecosystem through our native integrations.
            </p>
          </motion.div>

          <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)" }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center h-32"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-800 flex items-center justify-center">
                    <Image src={integration.logo} alt={integration.name} width={24} height={24} className="rounded-full" />
                  </div>
                  <div className="text-gray-300 font-medium">{integration.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-3 py-1 text-sm rounded-full">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Vision to Reality
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Tracing the evolution of MintHub from a bold idea to an ecosystem cornerstone.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500/30 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-1 md:text-right text-center md:pr-8">
                    <div className={`
                      md:hidden absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500/30 transform -translate-x-1/2
                    `} />
                    
                    <div className={index % 2 === 0 ? "md:text-right" : "md:text-left"}>
                      <Badge className={`mb-2 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-3 py-1 text-sm rounded-full`}>
                        {milestone.date}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
                    >
                      <Clock size={18} className="text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 md:pl-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

  </div>)}
