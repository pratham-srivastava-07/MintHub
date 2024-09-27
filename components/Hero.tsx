import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Launch Your Token or NFT
        </motion.h2>
        <motion.p className="mt-4 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          The easiest and most secure way to launch your tokens and NFTs. Join the world of decentralization.
        </motion.p>
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold transition" onClick={() => signIn()}>
            Get Started
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
