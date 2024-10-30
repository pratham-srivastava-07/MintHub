"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define form validation schema with zod
const nftFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
    metadataUrl: z.string().url({ message: "Metadata URL must be a valid URL" }),
});

export interface NFTFormProps {
    onSubmit: (data: { name: string; imageUrl: string; metadataUrl: string }) => void;
}

export default function NFTForm({ onSubmit }: NFTFormProps) {
    // React Hook Form integration with Zod validation
    const form = useForm({
        resolver: zodResolver(nftFormSchema),
        defaultValues: {
            name: '',
            imageUrl: '',
            metadataUrl: '',
        },
    });

    // Form submission handler
    const handleFormSubmit = (values: z.infer<typeof nftFormSchema>) => {
        onSubmit(values);
    };

    return (
        <div className="flex justify-center items-center h-auto bg-gray-900 py-10">
            <div className="flex items-center justify-center border border-gray-700 bg-gray-800 max-w-xl w-full mt-10 mb-24 rounded-lg shadow-lg text-white">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)} className="rounded-lg p-8 w-[90%] space-y-6">
                        <h1 className="text-3xl font-bold text-center mb-6">Create New NFT</h1>

                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter NFT Name" {...field} className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
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

                        {/* Metadata URL Field */}
                        <FormField
                            control={form.control}
                            name="metadataUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Metadata URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Metadata URL" {...field} className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md transition duration-300 hover:shadow-lg">
                                Mint NFT
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
