import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ToolMarquee from "@/components/sections/ToolMarquee";
import Problem from "@/components/sections/Problem";
import UseCases from "@/components/sections/UseCases";
import HowItWorks from "@/components/sections/HowItWorks";
import Proof from "@/components/sections/Proof";
import Survey from "@/components/sections/Survey";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ToolMarquee />
        <Problem />
        <UseCases />
        <HowItWorks />
        <Proof />
        <Survey />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
