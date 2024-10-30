"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeroSection() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-30"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Unlock the Power of <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-500">Minting</span> on Solana
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-2xl drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience seamless, fast, and cost-effective minting on the Solana blockchain. Join MintHub and create your first token in seconds.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10"
      >
        <Link href={session ? "/select-token" : "/api/auth/signin"}>
          <Button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-25 blur-md rounded-lg" />
            Start Minting
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
