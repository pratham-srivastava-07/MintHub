import { FC } from "react";
import {
    getAssociatedTokenAddressSync,
    createAssociatedTokenAccountInstruction,
    TOKEN_PROGRAM_ID,
    createMintToInstruction,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey } from "@solana/web3.js";

interface MintTokenProps {
    mintAddress: PublicKey;
    onDone: () => void;
}

const MintToken: FC<MintTokenProps> = ({ mintAddress, onDone }) => {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function mint() {
        if (!wallet.publicKey) {
            console.error("Wallet is not connected");
            return;
        }

        const associatedToken = getAssociatedTokenAddressSync(
            mintAddress,
            wallet.publicKey,
            false,
            TOKEN_PROGRAM_ID
        );

        console.log(associatedToken.toBase58());

        const transaction = new Transaction().add(
            createAssociatedTokenAccountInstruction(
                wallet.publicKey,
                associatedToken,
                wallet.publicKey,
                mintAddress,
                TOKEN_PROGRAM_ID
            )
        );

        try {
            await wallet.sendTransaction(transaction, connection);

            const mintTransaction = new Transaction().add(
                createMintToInstruction(
                    mintAddress,
                    associatedToken,
                    wallet.publicKey,
                    1000000000,
                    [],
                    TOKEN_PROGRAM_ID
                )
            );

            await wallet.sendTransaction(mintTransaction, connection);
            console.log("Minting done for token " + mintAddress.toBase58());
            onDone();
        } catch (error) {
            console.error("Error during minting:", error);
        }
    }

    return (
        <div>
            <input type="text" />
            <button onClick={mint}>Mint tokens</button>
        </div>
    );
};

export default MintToken;
