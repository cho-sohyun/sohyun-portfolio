"use client";

import Intro from "./sections/Intro";
import About from "./sections/AboutPage";
import SkillPage from "./sections/SkillPage";
import CareerPage from "./sections/CareerPage";
import ProjectPage from "./sections/ProjectPage";
import BlogPage from "./sections/BlogPage";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(true), 3000);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full bg-white">
      {!isLoading && (
        <div className="fixed inset-0 z-50">
          <LoadingScreen />
        </div>
      )}
      {isLoading && (
        <>
          <Intro />
          <About />
          <SkillPage />
          <CareerPage />
          <ProjectPage />
          <BlogPage />
          <Footer />
        </>
      )}
    </main>
  );
}
