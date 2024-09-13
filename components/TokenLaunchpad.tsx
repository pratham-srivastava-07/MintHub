"use client"
import { Keypair, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { MINT_SIZE, TOKEN_2022_PROGRAM_ID, createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Define form validation schema with zod
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    symbol: z.string().min(1, { message: "Symbol is required" }),
    imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
    initialSupply: z.number().positive({ message: "Initial Supply must be positive" }),
});

export function TokenLaunchpad() {
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
        } catch (err) {
            console.error(err);
        }
    }

    // Form submission handler
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        createToken(values);
    };

    return (
        <div className="flex justify-center items-center h-auto">
        <div className="flex items-center justify-center border border-white bg-white max-w-xl w-full mt-10 mb-24 rounded-md text-black">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg p-12 w-[80%]  space-y-4">
                    <h1>Solana Token Launchpad</h1>

                    {/* Name Field */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Token Name" {...field} />
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
                                <FormLabel>Symbol</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Token Symbol" {...field} />
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
                                <FormLabel>Image URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Image URL" {...field} />
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
                                <FormLabel>Initial Supply</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Enter Initial Supply" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <Button type="submit" variant={"outline"}>Create Token</Button>
                    </div>
                </form>
            </Form>
      </div>
      </div>
    );
}
