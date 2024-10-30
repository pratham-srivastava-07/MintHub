"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CardContainer, CardItem } from "@/components/ui/new-card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cards() {
    const router = useRouter();

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="pt-16">
            <div className="flex flex-col items-center justify-center space-y-8">
                <div className="flex space-x-8">
                    {/* Launch Token Card */}
                    <CardContainer className="cursor-pointer">
                        <motion.div
                            className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start items-center border-2 rounded-2xl"
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={cardVariants}
                        >
                            <CardItem>
                                <Image
                                    src={"/icon.webp"}
                                    alt={"Token"}
                                    width={400}
                                    height={400}
                                    className="rounded-[3rem]"
                                />
                            </CardItem>
                            <div className="px-4 flex flex-col justify-center items-start gap-5">
                                <h1 className="text-4xl text-white font-bold">Launch Token</h1>
                                <h4 className="text-lg text-white">
                                    Mint your own fungible token and start using it in your projects.
                                </h4>
                                <p className="text-purple-400">Get started with token creation.</p>
                                <Button
                                    variant={"outline"}
                                    onClick={() => {
                                        router.push("/token");
                                    }}
                                >
                                    Launch Token
                                </Button>
                            </div>
                        </motion.div>
                    </CardContainer>

                    {/* Launch NFT Card */}
                    <CardContainer className="cursor-pointer">
                        <motion.div
                            className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start items-center border-2 rounded-2xl"
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                            variants={cardVariants}
                        >
                            <CardItem>
                                <Image
                                    src={"/nft-icon.webp"}
                                    alt={"NFT"}
                                    width={400}
                                    height={400}
                                    className="rounded-[3rem]"
                                />
                            </CardItem>
                            <div className="px-4 flex flex-col justify-center items-start gap-5">
                                <h1 className="text-4xl text-white font-bold">Launch NFT</h1>
                                <h4 className="text-lg text-white">
                                    Create and launch your own unique non-fungible token (NFT).
                                </h4>
                                <p className="text-purple-400">Showcase your digital assets.</p>
                                <Button
                                    variant={"outline"}
                                    onClick={() => {
                                        console.log("error");
                                        router.push("/nft");
                                    }}
                                >
                                    Launch NFT
                                </Button>
                            </div>
                        </motion.div>
                    </CardContainer>
                </div>
            </div>
            <br />
        </div>
    );
}
