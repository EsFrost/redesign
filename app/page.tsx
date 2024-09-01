import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { PromoCard } from "./components/promo-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromoCard />
    </>
  );
}
