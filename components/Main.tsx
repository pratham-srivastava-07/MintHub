import Action from "./Action";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

// pages/index.js or pages/index.tsx
export default function Main() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Hero />
        <Feature />
        <Action />
        <Footer />
      </div>
    );
  }
  