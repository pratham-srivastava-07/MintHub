"use client"
import MintToken from "@/pages/launchpad/mint";
import TokenLaunchpad  from "@/pages/launchpad/TokenLaunchpad";
import {  PublicKey } from "@solana/web3.js";
import { useState } from "react";

export default function TokenPage() {
    // const network = WalletAdapterNetwork.Devnet;
    const [token, setToken] = useState<PublicKey | null>(null);
    const [mint, setMint] = useState<boolean>(false)

    // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    return <div>
        <TokenLaunchpad onCreateToken={(tokenMint: PublicKey | null)=> setToken(tokenMint)}/>
       <div className="text-white">
            {token && token.toBase58()}
            {mint}
       </div>
        {token && <MintToken onDone={()=> setMint(true)} mintAddress={token} />}
    </div>
}