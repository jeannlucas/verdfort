import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyHidrosemeadura } from '@/components/WhyHidrosemeadura';
import { Advantages } from '@/components/Advantages';
import { SoloAoVerde } from '@/components/SoloAoVerde';
import { Benefits } from '@/components/Benefits';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyHidrosemeadura />
        <Advantages />
        <SoloAoVerde />
        <Benefits />
        <Services />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
