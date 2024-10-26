import { signIn } from "next-auth/react";
import { Button } from "../ui/button";


export default function Header() {
    return <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-gray-800">Minthub</h1>
      </div>
      <div>
        <Button className="rounded-full p-3" onClick={() => signIn()} variant={"outline"}>Signin</Button>
      </div>
    </div>
  </header>
}