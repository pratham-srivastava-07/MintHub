"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RiTokenSwapLine, RiNftLine, RiDashboardLine, RiShieldCheckLine } from "react-icons/ri";
import { FiCpu, FiDatabase, FiGlobe, FiZap } from "react-icons/fi";

export default function FeaturesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
             Experience the Speed of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Solana</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              MintHub is the you need to create, launch, and manage tokens on the Solana blockchain.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Features */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2 
          variants={childVariants}
          className="text-3xl font-bold text-center mb-16"
        >
          Discover What You Can Create
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div variants={childVariants}>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-xl overflow-hidden h-full relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                  <RiTokenSwapLine className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Fungible Tokens</CardTitle>
                <CardDescription className="text-gray-400">Create your own fungible tokens on Solana</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    SPL token creation with customizable supply and decimals
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    Advanced tokenomics configurations
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    Token distribution and vesting schedules
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
                  Explore Fungible Tokens
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={childVariants}>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-xl overflow-hidden h-full relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mb-4">
                  <RiNftLine className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">NFT Collections</CardTitle>
                <CardDescription className="text-gray-400">Launch your own NFT collection on Solana</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-orange-500 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    Metaplex NFT standard implementation
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-orange-500 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    Customizable collection attributes and metadata
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-orange-500 flex items-center justify-center mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    Royalty configuration and distribution
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
                  Explore NFT Creation
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Platform Advantages */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2 
          variants={childVariants}
          className="text-3xl font-bold text-center mb-16"
        >
          The MintHub Advantage
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={childVariants} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
              <FiZap className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Leverage Solana&apos;s high-performance blockchain for rapid transaction processing</p>
          </motion.div>

          <motion.div variants={childVariants} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center mb-4">
              <FiCpu className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Simple to Use</h3>
            <p className="text-gray-400">Intuitive interface designed for both beginners and experienced developers</p>
          </motion.div>

          <motion.div variants={childVariants} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center mb-4">
              <FiDatabase className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
            <p className="text-gray-400">Take advantage of Solana&apos;s minimal gas fees for token operations</p>
          </motion.div>

          <motion.div variants={childVariants} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
              <FiGlobe className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ecosystem Ready</h3>
            <p className="text-gray-400">Seamlessly integrate with the broader Solana ecosystem and marketplaces</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Advanced Features */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2 
          variants={childVariants}
          className="text-3xl font-bold text-center mb-16"
        >
          Advanced Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={childVariants}>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-xl overflow-hidden h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <RiDashboardLine className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle>Token Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Comprehensive analytics dashboard to monitor your token performance, holder distribution, and market activity all in one place.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={childVariants}>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-xl overflow-hidden h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                  <RiShieldCheckLine className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle>Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Built-in security features including token freezing, transfer controls, and multi-signature authorization for high-value operations.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={childVariants}>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-xl overflow-hidden h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Developer API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Integrate MintHub&apos;s powerful token creation and management capabilities directly into your applications with our developer-friendly API.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-violet-900/30 to-indigo-900/30 border border-white/10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-indigo-500/5" />
          </div>
          <div className="relative px-6 py-16 sm:px-16 sm:py-20 lg:py-24 lg:px-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Create Your Token?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Join creators, artists, and developers who are building the future of digital assets on Solana with MintHub.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-6 px-10 rounded-lg text-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-xl">
                Start Minting
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}