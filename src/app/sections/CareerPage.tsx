"use client";
import React from "react";
import { motion } from "framer-motion";
import { CAREER_DATA } from "@/constants/career";

// 반응형 수정 필요
// 타이틀 여백 조정
// 타임라인 텍스트 정렬 통일
const CareerPage = () => {
  return (
    <motion.section
      id="career"
      className="flex flex-col items-center mt-30 p-8 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Title */}
      <motion.div
        className="md:w-4/5 md:pl-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      >
        <h3
          className="text-xs font-light text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          저는 이런 경력이 있습니다.
        </h3>
        <p className="mt-4 font-extrabold text-xl">CAREER</p>
      </motion.div>

      {/* Timeline */}
      <div className=" pl-6 flex flex-wrap mt-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {CAREER_DATA.map((item, index) => (
            <li key={index}>
              {index !== 0 && <hr />}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* start → 오른쪽 정렬 */}
              {item.align === "start" && (
                <motion.div
                  className="timeline-start mb-10 text-left md:text-right"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.2 }}
                >
                  <time className="text-xl italic">{item.year}</time>
                  <div className="mt-2 text-lg font-bold">{item.title}</div>
                  <p className="mt-2 text-sm">
                    {item.company} {item.period}
                  </p>

                  <div className="mt-4 text-sm space-y-1">
                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* end → 왼쪽 정렬 */}
              {item.align === "end" && (
                <motion.div
                  className="timeline-end mb-10 text-right md:text-left"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.2 }}
                >
                  <time className="text-xl italic">{item.year}</time>
                  <div className="mt-2 text-lg font-bold">{item.title}</div>
                  <p className="mt-2 text-sm">
                    {item.company} {item.period}
                  </p>

                  <div className="mt-4 text-sm space-y-1">
                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </motion.div>
              )}

              <hr />
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default CareerPage;
