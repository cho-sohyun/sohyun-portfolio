"use client";
import { useState } from "react";
import Image from "next/image";
import { ProjectData } from "@/constants/projectCard";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = ProjectData;

const ProjectCard = ({
  title,
  description,
  image,
  detail,
  notionUrl,
  githubUrl,
  blogUrl,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <Image
          src={image}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="p-4 bg-white">
          <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mt-2">
            {description}
          </p>

          {/* 상세보기 버튼 */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block mt-4 text-xs font-semibold text-white bg-black px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            {detail}
          </button>
        </div>
      </div>

      {/* 모달 컴포넌트 */}
      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        notionUrl={notionUrl}
        githubUrl={githubUrl}
        blogUrl={blogUrl}
      />
    </>
  );
};

export default ProjectCard;
