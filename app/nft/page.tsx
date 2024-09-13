"use client"
import NFTForm from "@/components/NFTLaunchpad";
import { TokenLaunchpad } from "@/components/TokenLaunchpad";

export default function() {
    return <div>
        <NFTForm onSubmit={function (data: { name: string; imageUrl: string; metadataUrl: string; }): void {
            throw new Error("Function not implemented.");
        } }/>
    </div>
}