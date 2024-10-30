"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 text-white">
      {/* Left Side - Text Content */}
      <div className="flex flex-col md:w-1/2 p-6">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About MintHub
        </motion.h1>
        <motion.p
          className="text-lg mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          MintHub is your go-to platform for minting tokens effortlessly on the Solana blockchain. We aim to simplify the token creation process for everyone.
        </motion.p>
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our Features
        </motion.h2>
        <ul className="list-disc list-inside">
          <motion.li
            className="mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <strong>Fast Minting:</strong> Mint tokens on the Solana blockchain within seconds.
          </motion.li>
          <motion.li
            className="mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <strong>Low Fees:</strong> Enjoy minimal transaction costs.
          </motion.li>
          <motion.li
            className="mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <strong>User-Friendly Interface:</strong> Designed for all skill levels.
          </motion.li>
        </ul>
      </div>

      {/* Right Side - Image Content */}
      <div className="md:w-1/2 flex justify-center p-6">
        <motion.div
          className="relative w-full h-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about.webp" // Replace with your relevant image
            alt="About MintHub"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
