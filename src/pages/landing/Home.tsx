import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Questions from "./sections/Questions";

export default function Home() {
  return (
    <section>
      <Hero />
      <Features />
      <Questions />
      <Contact />
    </section>
  );
}
