"use client"
import { Button } from "@/components/ui/button";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {data: session} = useSession()
  const router = useRouter()

  return (
   <div className="pt-20">
     {!session?.user && <>
      <div className="flex items-center justify-center">
        <Button variant={"outline"} onClick={() => signIn()}>Sign In</Button>
      </div>
     </>}
     {
      session?.user && <>
        <div className="flex items-center justify-center space-x-4">
        <Button variant={"outline"} onClick={()=> {router.push("/token")}}>Launch Token</Button>
        <Button variant={"outline"} onClick={()=> {router.push("/nft")}}>Launch NFT</Button>
        </div>
      </>
     }
   </div>
  );
}
