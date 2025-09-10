"use client";

import Intro from "./sections/Intro";
import About from "./sections/AboutPage";
import SkillPage from "./sections/SkillPage";
import CareerPage from "./sections/CareerPage";
import ProjectPage from "./sections/ProjectPage";
import Footer from "./components/Footer";
import BlogPage from "./sections/BlogPage";

export default function Home() {
  return (
    <main className="relative w-full">
      <section className="w-full h-screen">
        <Intro />
      </section>

      <section>
        <About />
      </section>
      <section>
        <SkillPage />
      </section>
      <section>
        <CareerPage />
      </section>
      <section>
        <ProjectPage />
      </section>
      <section>
        <BlogPage />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
