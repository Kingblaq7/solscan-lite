
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchCard from "@/components/SearchCard";
import ResultCard from "@/components/ResultCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <section className="container fade-up">

        <Hero />

        <SearchCard />

        <ResultCard />

      </section>

      <Footer />

    </main>
  );
}
