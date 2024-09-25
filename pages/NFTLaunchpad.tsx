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
        <div className="flex justify-center items-center h-auto">
            <div className="flex items-center justify-center border border-white bg-white max-w-xl w-full mt-10 mb-24 rounded-md text-black">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)} className="rounded-lg p-12 w-[80%] space-y-4">
                        <h1>Create New NFT</h1>

                       
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter NFT Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                       
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

                       
                        <FormField
                            control={form.control}
                            name="metadataUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Metadata URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Metadata URL" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <Button type="submit" className="text-white" variant="outline">Mint NFT</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}


