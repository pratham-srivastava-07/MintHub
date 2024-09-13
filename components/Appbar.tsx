import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export default function Appbar() {
    return <div className="flex items-center justify-center border-b border-white p-4">
        <div className="flex items-center justify-between space-x-20">
            <div>
                <WalletMultiButton/>
            </div>
            <div>
                <WalletDisconnectButton/>
            </div>
        </div>
    </div>
}