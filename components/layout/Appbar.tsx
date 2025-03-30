"use client";
import { signIn, useSession } from "next-auth/react";
import { SiLaunchpad } from "react-icons/si";
import { Button } from "../ui/button";
import Link from "next/link";
import UserAuth from "../content/UserAuth";
import { motion } from "framer-motion";

export default function Appbar() {
    const { data: session } = useSession();
    
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/70 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.div 
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href={"/"} className="flex items-center gap-2">
                            <SiLaunchpad className="h-7 w-7 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" />
                            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                                MintHub
                            </span>
                        </Link>
                    </motion.div>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {!session ? (
                            <div className="flex items-center gap-3">
                                <Link href="/api/auth/signin">
                                    <Button 
                                        variant="ghost" 
                                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                        onClick={() => signIn("email", { callbackUrl: "/select", redirect: false })}
                                    >
                                        Log in
                                    </Button>
                                </Link>
                                <Link href="/api/auth/signin">
                                    <Button 
                                        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/30"
                                        onClick={() => signIn("email", { callbackUrl: "/select", redirect: false })}
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <UserAuth />
                        )}
                    </div>
                </div>
            </div>
        </motion.header>
    );
}