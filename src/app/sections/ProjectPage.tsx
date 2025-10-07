"use client";
import { motion } from "framer-motion";
import { PROJECT_DATA } from "@/constants/projectCard";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center mt-16 md:mt-24 p-8 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="w-full md:w-4/5 px-2 sm:px-4 md:pl-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      >
        <h3
          className="text-xs font-light text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          MY PROJECTS
        </h3>
        <p className="mt-4 font-extrabold text-xl text-gray-900">PROJECTS</p>
      </motion.div>

      <div className="flex flex-wrap mt-8 md:w-4/5 gap-6">
        {PROJECT_DATA.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="md:w-4/5 md:pl-8 w-full mt-14 text-lg font-bold bg-gray-200 mx-auto p-6">
        <p className="text-sm text-center text-gray-900">
          앞으로 더욱 많은 프로젝트를 만들어갈 예정입니다.
        </p>
      </div>
    </motion.section>
  );
};

export default ProjectPage;
