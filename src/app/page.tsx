// import Image from "next/image";


import Link from "next/link";
import Hero from "./components/Hero";
import Recentpost from "./components/Recentpost";



export default function Home() {
  return (
    <div className="bg-footerbackground">
      
    <Hero/>
    <Recentpost/>

    </div>
  );
}
