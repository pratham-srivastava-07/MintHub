
import { signIn, signOut, useSession } from "next-auth/react";
import { SiLaunchpad } from "react-icons/si";
import { Button } from "../ui/button";
import Link from "next/link";



export default function Appbar() {
    const {data: session} = useSession()
    return <div>
        <div className="flex justify-between items-center p-4 pt-7">
            <div className="title flex justify-center items-center space-x-3 pl-3">
                <SiLaunchpad />
                <div className="font-bold text-2xl ">Minthub</div>
            </div>
            <div className="signin flex justify-center items-center space-x-5 pr-5">

                    <div className="about">
                        <Link href={"/about"} className="hover:underline">About</Link>
                    </div>

                    {!session ?
                         <Link href={"/api/auth/signin"}>
                            <Button variant={"outline"} onClick={()=> signIn("email", {callbackUrl: "/select", redirect: false})}>Signin</Button>
                        </Link>
                       : 
                        <Link href={"/api/auth/signout"}>
                            <Button variant={"outline"} onClick={()=>signOut({callbackUrl: "/"})}>Signout</Button>
                        </Link>
                    }  
            </div>
        </div>
    </div>
}