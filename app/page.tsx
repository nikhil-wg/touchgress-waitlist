import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import AmbientCanvas from "@/components/AmbientCanvas";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <AmbientCanvas />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <CtaBanner />
        </ScrollReveal>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
