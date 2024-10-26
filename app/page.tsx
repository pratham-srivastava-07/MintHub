"use client"
import Appbar from "@/components/layout/Appbar";
import { useSession } from "next-auth/react";
import MainPage from "@/components/tokens/MainPage";
import Cards from "@/pages/Page";

export default function Home() {
  const {data: session} = useSession()

  return(
    <div>
       {
       session ?  <div className="">
        <Appbar/>
        <Cards />
       </div> : <MainPage />
        //
       }
    </div>
  );
}
