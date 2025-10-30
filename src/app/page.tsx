import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
import Featuredcomp from "@/components/Featuredcomp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
    <Hero/>
    <About/>
    <Featuredcomp/>
   <Footer/>
    </main>
  );
}
