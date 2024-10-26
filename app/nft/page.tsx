"use client"
import NFTForm from "@/pages/launchpad/NFTLaunchpad";


export default function() {
    return <div>
        <NFTForm onSubmit={function (data: { name: string; imageUrl: string; metadataUrl: string; }): void {
            throw new Error("Function not implemented.");
        } }/>
    </div>
}