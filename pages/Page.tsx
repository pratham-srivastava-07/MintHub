import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CardContainer, CardItem } from "@/components/ui/card";
import Image from "next/image"

export default function Cards() {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div className="pt-20">
            {!session?.user && (
                <div className="flex items-center justify-center">
                    <Button variant={"outline"} onClick={() => signIn()}>
                        Sign In
                    </Button>
                </div>
            )}
            {session?.user && (
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="flex space-x-8">
                        {/* Launch Token Card */}
                        <CardContainer className="cursor-pointer">
                            <div className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start items-center border-2 rounded-2xl">
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
                            </div>
                        </CardContainer>

                        {/* Launch NFT Card */}
                        <CardContainer className="cursor-pointer">
                            <div className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start items-center border-2 rounded-2xl">
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
                            </div>
                        </CardContainer>
                    </div>
                </div>
            )}
            <br />
        </div>
    );
}
