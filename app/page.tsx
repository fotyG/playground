import Hero from "@/app/components/Hero";
import Facts from "@/app/components/Facts";
import JumpIn from "@/app/components/JumpIn";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Hero />
      <Facts />
      <JumpIn />
    </main>
  );
}
