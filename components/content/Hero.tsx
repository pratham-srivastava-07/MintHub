"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-900 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-40 w-40 rounded-full bg-violet-500"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              opacity: 0.3 
            }}
            animate={{ 
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)"
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Unlock the Power of <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Minting</span> on Solana
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 mb-10">
              Experience seamless, fast, and cost-effective minting on the Solana blockchain. 
              Join MintHub and create your first token in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-6 rounded-lg text-lg font-medium hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/30">
                Start Minting
              </Button>
              
              <Button variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300">
                Learn More
              </Button>
            </div>
            
          </motion.div>
        </div>
        
        <div className="hidden lg:block lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 blur-2xl"/>
              <div className="relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-xl p-8 shadow-2xl">
              <Image
    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
    alt="Minting illustration"
    width={500}
    height={400}
    className="w-full h-auto"
    priority
  />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}