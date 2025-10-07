"use client";

import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  notionUrl: string;
  githubUrl?: string;
  blogUrl?: string;
  siteUrl?: string;
}

const ProjectModal = ({
  isOpen,
  onClose,
  notionUrl,
  githubUrl,
  blogUrl,
  siteUrl,
}: ProjectModalProps) => {
  // 모달 열릴 때 body 스크롤 잠금
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-99">
      {/* 닫기 버튼 + 외부 링크 */}
      <div className="absolute top-2 md:top-4 right-2 md:right-4 flex flex-col items-end space-y-2 z-50">
        <button
          onClick={onClose}
          className="text-white bg-black/40 p-2 rounded-full hover:bg-black transition shadow-lg cursor-pointer"
        >
          <MdClose size={24} />
        </button>
        <div className="flex flex-col gap-2">
          {githubUrl && (
            <div className="flex flex-col items-center mt-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-2 rounded-full cursor-pointer flex items-center justify-center"
              >
                <FaGithub size={24} />
              </a>
              <span className="text-[10px] mt-1 text-black md:text-white">
                GitHub
              </span>
            </div>
          )}
          {blogUrl && (
            <div className="flex flex-col items-center mt-2">
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-2 rounded-full cursor-pointer flex items-center justify-center"
              >
                <SiVelog size={24} />
              </a>
              <span className="text-[10px] mt-1 text-black md:text-white">
                관련 블로그
              </span>
            </div>
          )}
          {siteUrl && (
            <div className="flex flex-col items-center mt-2">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-2 rounded-full cursor-pointer flex items-center justify-center"
              >
                <IoIosLink size={24} />
              </a>
              <span className="text-[10px] mt-1 text-black md:text-white">
                배포 링크
              </span>
            </div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className=" bg-white shadow-xl max-w-full md:max-w-5xl w-full h-[90vh] overflow-hidden relative"
      >
        <iframe
          src={notionUrl}
          className="w-full h-full border-none"
          title="Project Details"
        />
      </motion.div>
    </div>
  );
};

export default ProjectModal;
