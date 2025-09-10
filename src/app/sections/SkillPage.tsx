"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SKILL_DATA, SkillData } from "@/constants/skill";

const SkillPage = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const renderProgressBar = (skill: SkillData, index: number) => (
    <motion.div
      ref={(el) => {
        itemRefs.current[index] = el;
      }}
      key={skill.name}
      className="mb-6"
    >
      <p className="text-sm font-semibold">{skill.name}</p>
      <div className="relative w-full">
        <progress
          className={`progress w-full ${
            skill.name === "HTML" || skill.name === "JavaScript (ES6+)"
              ? "progress-primary"
              : skill.name === "CSS"
              ? "progress-secondary"
              : skill.name === "React"
              ? "progress-info"
              : skill.name === "TypeScript" || skill.name === "Bootstrap"
              ? "progress-warning"
              : skill.name === "Next.js"
              ? "progress-accent"
              : skill.name === "TailwindCSS"
              ? "progress-success"
              : skill.name === "Figma"
              ? "progress-error"
              : ""
          }`}
          value={skill.level}
          max="100"
        />
        <span
          className="absolute right-0 bottom-6 text-[10px] font-bold text-gray-600"
          style={{ right: `${100 - skill.level}%` }}
        >
          {skill.level}%
        </span>
      </div>
      <p className="text-sm font-normal text-gray-800 mt-1 ">
        {skill.description}
      </p>
    </motion.div>
  );

  return (
    <motion.section
      id="skills"
      className="flex flex-col items-center mt-30 p-8 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="md:w-4/5 md:pl-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3
          className="text-xs font-light text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          저는 이런 기술들을 다룰 수 있습니다.
        </h3>
        <p className="mt-4 font-extrabold text-xl">SKILLS</p>
        <p className="mt-8 text-gray-700 text-sm leading-relaxed">
          HTML과 JavaScript를 시작으로 웹 개발의 기초를 다졌으며, React와
          TypeScript, 다양한 CSS 프레임워크를 활용해 프로젝트를 진행했습니다.
          <br />
          효율적인 상태 관리와 최신 라이브러리 학습을 이어가며 협업과 버전
          관리에도 익숙합니다.
        </p>
      </motion.div>

      <div className="md:w-4/5 md:pl-8 flex flex-wrap mt-8">
        {/* 왼쪽 프로그래스 바 */}
        <motion.div
          className="w-full sm:w-1/2 pr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {SKILL_DATA.slice(0, 5).map((skill, index) =>
            renderProgressBar(skill, index)
          )}
        </motion.div>

        {/* 오른쪽 프로그래스 바 */}
        <motion.div
          className="w-full sm:w-1/2 pr-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {SKILL_DATA.slice(5).map((skill, index) =>
            renderProgressBar(skill, index + 5)
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillPage;
