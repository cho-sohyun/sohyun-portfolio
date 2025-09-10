"use client";
import Image from "next/image";
import { BlogData } from "@/constants/blog";

type BlogCardProps = BlogData;

const BlogCard = ({ title, description, image, link }: BlogCardProps) => {
  return (
    <div className="relative group w-full sm:w-1/2 lg:w-1/3 p-4">
      <Image
        src={image}
        alt={title}
        className="w-full h-80 object-cover overflow-hidden"
      />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-start p-4">
        <p className="text-white text-start p-2 custom-font text-lg">{title}</p>
        <p className="text-white text-start p-2 font-normal text-sm">
          {description}
        </p>
        <div className="absolute bottom-4 left-4 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-1 px-3 rounded hover:opacity-80"
          >
            <p className="text-xs font-bold">Read More</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
