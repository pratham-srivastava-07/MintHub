"use client";
import EnhancedAboutSection from "@/components/content/AboutSection";
import HeroSection from "@/components/content/Hero";
import Slider from "@/components/global/slider";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <EnhancedAboutSection />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-gradient-to-b from-black to-violet-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">10K+</p>
              <p className="text-gray-400">Tokens Minted</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">1K+</p>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">100ms</p>
              <p className="text-gray-400">Avg. Mint Speed</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Slider />
    </main>
  );
}