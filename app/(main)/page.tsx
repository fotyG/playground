import Hero from "@/app/(main)/components/Hero";
import Facts from "@/app/(main)/components/Facts";
import JumpIn from "@/app/(main)/components/JumpIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Facts />
      <JumpIn />
    </main>
  );
}
