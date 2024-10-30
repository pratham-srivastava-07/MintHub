"use client"
import NFTForm from "@/pages/launchpad/NFTLaunchpad";


export default function NFTPage() {
    return <div>
        <NFTForm onSubmit={function (data: { name: string; imageUrl: string; metadataUrl: string; }): void {
            console.log(data)
            // throw new Error("Function not implemented.");
        } }/>
    </div>
}