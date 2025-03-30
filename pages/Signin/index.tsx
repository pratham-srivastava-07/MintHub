"use client";
import SignInForm from "@/components/forms/signin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const Signin = () => {
  const handleAuthWithGithub = async () => {
    await signIn("github", { callbackUrl: "/select-token", redirect: false });
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto p-8 rounded-2xl bg-gray-900/70 backdrop-blur-xl border border-gray-800 shadow-2xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Welcome Back</h3>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mb-4"></div>
            <p className="text-gray-400 text-sm leading-relaxed px-4">
              Take your first step towards launching your own token with MintHub. Connect your wallet and bring your blockchain projects to life.
            </p>
          </motion.div>
        </div>

        <SignInForm />

        <div className="my-8 w-full relative">
          <div className="bg-gray-900 px-4 py-1 absolute text-gray-400 text-xs font-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            OR CONTINUE WITH
          </div>
          <Separator orientation="horizontal" className="bg-gray-700" />
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            className="flex items-center justify-center gap-3 w-full rounded-lg bg-white text-black hover:bg-gray-200 transition-colors py-5 font-medium"
            onClick={handleAuthWithGithub}
          >
            <SiGithub className="h-5 w-5" />
            Continue with GitHub
          </Button>
        </motion.div>

        <div className="flex items-center justify-center">
          <p className="pt-8 text-gray-400 text-sm">
            New to MintHub?{" "}
            <Link 
              className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline transition-colors" 
              href={"/signup"}
            >
              Create an account
            </Link>
          </p>
        </div>
      </motion.div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          By continuing, you agree to MintHub&apos;s{" "}
          <Link href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;