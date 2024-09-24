import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function Hero() {
    return <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold">Launch Your Token or NFT</h2>
      <p className="mt-4 text-lg">
        The easiest and most secure way to launch your tokens and NFTs. Join the world of decentralization.
      </p>
      <div className="mt-8">
        <Button  className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold transition" onClick={()=> signIn()}>
            Get Started
        </Button>
      </div>
    </div>
  </section>
}