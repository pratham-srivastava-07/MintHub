import Action from "../content/Action";

import Feature from "../content/Feature";
import Hero from "../content/Hero";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


// pages/index.js or pages/index.tsx
export default function MainPage() {
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
  