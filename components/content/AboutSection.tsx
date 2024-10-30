"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"; // Adjust the import based on your setup

export default function AboutSection() {
  const features = [
    {
      title: "Fast Minting",
      description: "Mint tokens on the Solana blockchain within seconds, thanks to our optimized processes.",
      icon: "/fast.webp",
    },
    {
      title: "Low Fees",
      description: "Enjoy minimal transaction costs, enabling you to mint without breaking the bank.",
      icon: "/low.webp",
    },
    {
      title: "User-Friendly Interface",
      description: "A simple, intuitive interface designed for all skill levels",
      icon: "/ui.webp",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-white">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Choose MintHub?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="transform hover:scale-105 transition-all duration-300"
          >
            <Card className="bg-gray-900 text-white shadow-lg h-80 flex flex-col justify-between items-center p-6">
              <CardHeader className="flex flex-col items-center">
                <Image src={feature.icon} alt={feature.title} width={50} height={50} className="mb-4" />
                <CardTitle className="text-2xl font-semibold text-center mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-center">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
