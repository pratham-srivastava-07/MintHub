"use client"
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";

export default function WalletButtons() {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) {
      return null; 
  }
    return <div>
        <div className="flex justify-between items-center pt-5">
            <div className="pl-5">
                <WalletDisconnectButton />
            </div>
            <div className="pr-5">
                 <WalletMultiButton />
            </div>
        </div>
    </div>
}