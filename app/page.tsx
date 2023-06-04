import Hero from "@/app/components/Hero"
import Facts from "@/app/components/Facts"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Facts />
    </main>
  );
}
