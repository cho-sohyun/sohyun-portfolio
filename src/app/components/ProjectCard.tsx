"use client";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/constants/projectCard";

type ProjectCardProps = ProjectData;

const ProjectCard = ({
  id,
  title,
  description,
  image,
  detail,
}: ProjectCardProps) => {
  return (
    <div className="relative group w-full sm:w-1/2 lg:w-1/3 p-4">
      <Image src={image} alt={title} className="w-full h-80 object-cover" />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-start p-4">
        <p className="text-white text-start p-6 font-bold text-lg">{title}</p>
        <p className="text-white text-start p-5 font-normal text-sm">
          {description}
        </p>
      </div>

      {/* hover 버튼 */}
      <div className="absolute bottom-4 left-4 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
        <Link
          href={`/projects/${id}`}
          className="bg-white text-black py-1 px-3 rounded hover:opacity-80"
        >
          <p className="text-xs font-bold">{detail}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
