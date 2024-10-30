"use client"
import localFont from "next/font/local";
import "./globals.css";

import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import Appbar from "@/components/layout/Appbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" style={{overflow: "auto"}}>
    <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(circle,_#000000,_#111111,_#222222,_#000000)] bg-[length:150%_150%] animate-[pulsingGlow_8s_ease-in-out_infinite]`}
  style={{ color: 'white' }}
>
          <AnimatePresence>
            <motion.div>
                <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                  <SessionProvider>
                  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                      <WalletProvider wallets={[]}>
                  <WalletModalProvider>
                        <Appbar />
                        {children} 
                  </WalletModalProvider>
                  </WalletProvider>
                    </ConnectionProvider>
                  </SessionProvider>
                </ThemeProvider>
            </motion.div>
          </AnimatePresence>
      </body>
    </html>
  );
}
