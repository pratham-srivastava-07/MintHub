
import { signIn, signOut, useSession } from "next-auth/react";
import { SiLaunchpad } from "react-icons/si";
import { Button } from "../ui/button";
import Link from "next/link";
import UserAuth from "../content/UserAuth";



export default function Appbar() {
    const {data: session} = useSession()
    return <div>
        <div className="flex justify-between items-center p-4 pt-7">
            <div className="title flex justify-center items-center space-x-3 pl-10">
                <SiLaunchpad />
                <Link href={"/"}><div className="font-bold text-2xl cursor-pointer">Minthub</div></Link>
            </div>
            <div className="signin flex justify-center items-center gap-7 pr-10">

                    <div className="about">
                        <Link href={"/about"} className="hover:underline"><Button variant={"outline"}>About</Button></Link>
                    </div>

                    {!session ?
                         <Link href={"/api/auth/signin"}>
                            <Button variant={"outline"} onClick={()=> signIn("email", {callbackUrl: "/select", redirect: false})}>Signin</Button>
                        </Link>
                       : 
                       <UserAuth />
                    }  
            </div>
        </div>
    </div>
}