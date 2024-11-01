"use client"
import { signIn, useSession } from "next-auth/react";
import { SiLaunchpad } from "react-icons/si";
import { Button } from "../ui/button";
import Link from "next/link";
import UserAuth from "../content/UserAuth";

export default function Appbar() {
    const { data: session } = useSession();
    return (
        <div className="p-4 pt-7">
            <div className="flex justify-between items-center">
                <div className="title flex items-center space-x-2 sm:space-x-3 pl-4 sm:pl-10">
                    <SiLaunchpad />
                    <Link href={"/"}>
                        <div className="font-bold text-2xl cursor-pointer">Minthub</div>
                    </Link>
                </div>
                <div className="signin flex items-center gap-4 sm:gap-7 pr-4 sm:pr-10">
                    <Link href={"/about"} className="hover:underline">
                        <Button variant={"outline"}>About</Button>
                    </Link>
                    {!session ? (
                        <Link href={"/api/auth/signin"}>
                            <Button variant={"outline"} onClick={() => signIn("email", { callbackUrl: "/select", redirect: false })}>
                                Signin
                            </Button>
                        </Link>
                    ) : (
                        <UserAuth />
                    )}
                </div>
            </div>
        </div>
    );
}
