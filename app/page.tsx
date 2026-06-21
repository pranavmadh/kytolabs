import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030208] text-white flex flex-col selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      {/* Subtle top highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />

      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <RecentProjects />
        <HowWeWork />
        <Testimonials />
      </main>
    </div>
  );
}
