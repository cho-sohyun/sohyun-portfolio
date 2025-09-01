"use client";

import Intro from "./sections/Intro";
import About from "./sections/AboutPage";
import { motion } from "framer-motion";
import SkillPage from "./sections/SkillPage";
import CareerPage from "./sections/CareerPage";

export default function Home() {
  return (
    <main className="relative w-full">
      <section className="w-full h-screen">
        <Intro />
      </section>

      <section className="w-full ">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col"
        >
          <About />
        </motion.div>
      </section>
      <section className="min-h-screen flex flex-col">
        <SkillPage />
      </section>
      <section className="min-h-screen flex flex-col">
        <CareerPage />
      </section>
    </main>
  );
}
