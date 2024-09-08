import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export default function Appbar() {
    return <div className="flex items-center justify-between border-b border-black p-1">
        <div className="p-2 text-2xl font-bold">
            NFT Launchpad
        </div>
        <div className="flex items-center justify-center">
            <div className='p-4 flex justify-center'><WalletMultiButton/></div>
            <div className="pr-4">
            <WalletDisconnectButton/>
            </div>
            {/* <div className="pr-5"><ModeToggle/></div> */}
        </div>
    </div>
}