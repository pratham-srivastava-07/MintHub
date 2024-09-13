"use client"
import { Keypair, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { MINT_SIZE, TOKEN_2022_PROGRAM_ID, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function TokenLaunchpad() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function createToken() {
        try {
            if (!wallet.publicKey) {
                console.log('Wallet not connected');
                return;
            }
            
            const mintKeypair = Keypair.generate();
            const lamports = await getMinimumBalanceForRentExemptMint(connection);
    
            const transaction = new Transaction().add(
                SystemProgram.createAccount({
                    fromPubkey: wallet.publicKey,
                    newAccountPubkey: mintKeypair.publicKey,
                    space: MINT_SIZE,
                    lamports,
                    programId: TOKEN_2022_PROGRAM_ID,
                }),
                createInitializeMint2Instruction(mintKeypair.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_2022_PROGRAM_ID)
            );
                
            transaction.feePayer = wallet.publicKey;
            transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

            // sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions)
            transaction.partialSign(mintKeypair); // cuz launchpad k pass user k keypair ka access nahi hai isliye we use this
    
            await wallet.sendTransaction(transaction, connection);
            console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
        } catch(err) {
            alert(err)
        }
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <Input className='inputText' type='text' placeholder='Name'></Input> <br />
        <Input className='inputText' type='text' placeholder='Symbol'></Input> <br />
        <Input className='inputText' type='text' placeholder='Image URL'></Input> <br />
        <Input className='inputText' type='text' placeholder='Initial Supply'></Input> <br />
        <Button variant={"outline"} onClick={createToken} className='btn'>Create a token</Button>
    </div>
}