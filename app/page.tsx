import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  Stats,
  Features,
  HowItWorks,
  Security,
  Faq,
  Cta,
} from "@/components/sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Security />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
