import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Manufacturing from "@/components/Manufacturing";
import MaterialFlow from "@/components/MaterialFlow";
import Technology from "@/components/Technology";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
         <Process />
         <Manufacturing />
         <MaterialFlow />
         <Technology />
         <WhyUs />
         <CTA />
      </main>

      <Footer />
    </>
  );
}
