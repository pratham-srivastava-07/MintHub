"use client"
import MintToken from "@/pages/launchpad/mint";
import { TokenLaunchpad } from "@/pages/launchpad/TokenLaunchpad";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useMemo, useState } from "react";

export default function() {
    const network = WalletAdapterNetwork.Devnet;
    const [token, setToken] = useState<PublicKey | null>(null);
    const [mint, setMint] = useState<boolean>(false)

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    return <div>
        <TokenLaunchpad onCreateToken={(tokenMint: any)=> setToken(tokenMint)}/>
       <div className="text-white">
            {token && token.toBase58()}
       </div>
        {token && <MintToken onDone={()=> setMint(true)} mintAddress={token} />}
    </div>
}