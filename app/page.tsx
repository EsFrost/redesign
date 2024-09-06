import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { PromoCard } from "./components/promo-card";
import { VideoSection } from "./components/video-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PromoCard />
        <VideoSection />
      </main>
    </div>
  );
}
