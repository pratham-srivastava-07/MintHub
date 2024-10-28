"use client"
import SignInForm from "@/components/forms/signin"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { SiGithub } from "react-icons/si"

const Signin = () => {
  

  const handleAuthWithGithub = async () => {
    await signIn("github", { callbackUrl: "/select-token", redirect: false });
  }

  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">Sign In</h5>
      <p className="text-themeTextGray leading-tight">
        Take your first step towards launching your own token with MintHub. Empower your ideas, connect with investors, and bring your blockchain projects to life. Start building the future of decentralized finance today.
      </p>
      <SignInForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <div className="flex justify-center items-center pt-5">
        <Button 
          className="flex items-center justify-center gap-3 w-full rounded-full"
          onClick={handleAuthWithGithub}
        >
          Github
          <SiGithub />
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <p className="pt-10">
          New to MintHub? <Link className="text-blue-500 hover:underline" href={"/signup"}>Create an account</Link>
        </p>
      </div>
    </>
  );
}

export default Signin;
