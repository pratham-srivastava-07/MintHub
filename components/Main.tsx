import Action from "./Action";
import Appbar from "./Appbar";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

// pages/index.js or pages/index.tsx
export default function Main() {
    return (
      <div className="bg-gray-100">
        <div>
          <Header />
          {/* <Appbar /> */}
        </div>
       <div>
          <Hero />
          <Feature />
          <Action />
          <Footer />
       </div>
      </div>
    );
  }
  