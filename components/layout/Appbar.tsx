import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { signOut, useSession } from "next-auth/react";
import { SiLaunchpad } from "react-icons/si";

import { Divide } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../content/ModeToggle";


export default function Appbar() {
    const {data: session} = useSession();
    return <>
        {session?.user && <div className="flex items-center justify-center border-b border-white p-4">
        <div className="flex items-center justify-between space-x-20">
            <div>
                <WalletMultiButton/>
            </div>
            <div>
                <WalletDisconnectButton/>
            </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
            {session?.user && <div>
                    <Button variant={"link"} onClick={()=> signOut()}>Log Out</Button>
                </div>}
            <ModeToggle />
        </div>
    </div>}
    {
        !session?.user && <div className="flex items-center justify-between border-b border-white p-4">
            <div className="text-lg font-semibold flex items-center space-x-4">
                <SiLaunchpad />
               <div>
               MintHUB
               </div>
            </div>
           
        </div>
    }
     
    </>
}