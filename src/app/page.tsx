import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Stats } from "../components/Stats";
import { StoryBand } from "../components/StoryBand";
import { Subjects } from "../components/Subjects";
import { Tutors } from "../components/Tutors";
import { Achievements } from "../components/Achievements";
import { Packages } from "../components/Packages";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <StoryBand />
        <Subjects />
        <Tutors />
        <Achievements />
        <Packages />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
