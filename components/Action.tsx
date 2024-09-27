import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Action() {
  return (
    <motion.section
      className="bg-indigo-600 text-white py-16"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold">Ready to Launch?</h3>
        <p className="mt-4 text-lg">Sign in now and start deploying your tokens and NFTs in minutes.</p>
        <div className="mt-8">
          <Button
            className="px-8 py-6 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition"
            onClick={() => signIn()}
          >
            Sign in to get started
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
