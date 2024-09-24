"use client"
import Appbar from "@/components/Appbar";
import Main from "@/components/Main";
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {
  const {data: session} = useSession()

  return(
    <div>
       {
        session ? <div>
          <Appbar />
          <Page />
        </div> : 
        <Main />
       }
    </div>
  );
}
