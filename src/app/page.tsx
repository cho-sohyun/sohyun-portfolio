"use client";

import Intro from "./sections/Intro";
import About from "./sections/AboutPage";
import SkillPage from "./sections/SkillPage";
import CareerPage from "./sections/CareerPage";
import ProjectPage from "./sections/ProjectPage";
import BlogPage from "./sections/BlogPage";

export default function Home() {
  return (
    <main className="relative w-full bg-white">
      <Intro />
      <About />
      <SkillPage />
      <CareerPage />
      <ProjectPage />
      <BlogPage />
    </main>
  );
}
