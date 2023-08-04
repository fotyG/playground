import Hero from "@/app/(home)/components/Hero";
import JumpIn from "@/app/(home)/components/JumpIn";
import FactsContainer from "@/app/(home)/components/FactsContainer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FactsContainer />
      <JumpIn />
    </main>
  );
}
