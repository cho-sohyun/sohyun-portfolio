"use client";

import Intro from "./sections/Intro";
import About from "./sections/AboutPage";
import SkillPage from "./sections/SkillPage";
import CareerPage from "./sections/CareerPage";
import ProjectPage from "./sections/ProjectPage";
import Footer from "./components/Footer";
import BlogPage from "./sections/BlogPage";
import ScrollTopButton from "./components/ScrollTopButton";

export default function Home() {
  return (
    <main className="relative w-full">
      <Intro />
      <About />
      <SkillPage />
      <CareerPage />
      <ProjectPage />
      <BlogPage />
      <Footer />
      <ScrollTopButton />
    </main>
  );
}
