"use client"
import { Keypair, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { MINT_SIZE, TOKEN_2022_PROGRAM_ID, createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define form validation schema with zod
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    symbol: z.string().min(1, { message: "Symbol is required" }),
    imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
    initialSupply: z.preprocess((val) => Number(val), z.number().positive({message: "Initial Supply must be positive"}))
});

export function TokenLaunchpad({onCreateToken}: {onCreateToken: any }) {
    const { connection } = useConnection();
    const wallet = useWallet();

    // React Hook Form integration with Zod validation
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            symbol: '',
            imageUrl: '',
            initialSupply: 0,
        },
    });

    // Token creation function
    async function createToken(values: z.infer<typeof formSchema>) {
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
                createInitializeMint2Instruction(
                    mintKeypair.publicKey, 
                    9, 
                    wallet.publicKey, 
                    wallet.publicKey, 
                    TOKEN_2022_PROGRAM_ID
                )
            );
                
            transaction.feePayer = wallet.publicKey;
            transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

            transaction.partialSign(mintKeypair);

            await wallet.sendTransaction(transaction, connection);
            console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
            alert("Token mint created");
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }

    // Form submission handler
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        createToken(values);
    };

    return (
        <div className="flex justify-center items-center h-auto bg-gray-900 py-10">
    <div className="flex items-center justify-center border border-gray-700 bg-gray-800 max-w-xl w-full mt-10 mb-24 rounded-lg shadow-lg text-white">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg p-8 w-[90%] space-y-6">
                <h1 className="text-3xl font-bold text-center mb-6">Solana Token Launchpad</h1>

                {/* Name Field */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Token Name" {...field} className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Symbol Field */}
                <FormField
                    control={form.control}
                    name="symbol"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Symbol</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Token Symbol" {...field} className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Image URL Field */}
                <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Image URL" {...field} className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Initial Supply Field */}
                <FormField
                    control={form.control}
                    name="initialSupply"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Initial Supply</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Enter Initial Supply" {...field} className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                    <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md transition duration-300 hover:shadow-lg">
                        Create Token
                    </Button>
                </div>
            </form>
        </Form>
    </div>
</div>
    );
}
