import Signin from "@/pages/Signin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SigninPage() {
    const session = await getServerSession()

    if(session) redirect("/select-token")

    return <div className="flex justify-center">
        <div className="max-w-xl">
        <Signin />
        </div>
    </div>
}