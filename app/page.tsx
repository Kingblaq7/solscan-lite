import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SearchCard from "@/components/SearchCard";
import ResultCard from "@/components/ResultCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">

      <BackgroundEffects />

      <Navbar />

      <section className="container fade-up">
        <Hero />
      </section>

      <Features />

      <section className="container">
        <SearchCard />
        <ResultCard />
      </section>

      <Footer />

    </main>
  );
}
