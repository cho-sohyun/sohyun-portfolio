"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import profileImg from "@/assets/profile2.png";
import bgImg from "@/assets/background.jpg";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Intro = () => {
  const [step, setStep] = useState<"intro" | "frontend" | "image">("intro");

  useEffect(() => {
    const timer = setTimeout(() => setStep("frontend"), 2000);
    const timer2 = setTimeout(() => setStep("image"), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-100"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* 좌측 상단 링크 */}
      <div className="absolute top-6 left-6 flex space-x-6 text-sm font-medium">
        <a href="https://github.com" className="border-b-2 border-black">
          GitHub
        </a>
        <a href="https://velog.io" className="border-b-2 border-black">
          Velog
        </a>
      </div>
      <AnimatePresence>
        {/* intro 텍스트 */}
        {(step === "intro" || step === "frontend" || step === "image") && (
          <motion.div
            key="intro-text"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{
              y: step === "image" ? "-10vh" : 0, // main 화면으로 전환 시 위로 슬라이드
              opacity: 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {step !== "intro" && (
              <motion.h1
                className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-white whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ y: -70, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Front-End
              </motion.h1>
            )}

            <p className="text-5xl font-normal text-black mb-4">
              프론트엔드 개발자 <span className="font-bold">조소현</span>
              입니다.
            </p>
            <p className="text-md text-black max-w-md mx-auto">
              협력의 힘으로 성장하며, 포기하지 않고 끊임없이 노력하며
              나아갑니다.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* intro 이미지 */}
      {step === "image" && (
        <motion.div
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={profileImg}
            alt="프로필"
            width={280}
            height={280}
            className="rounded-full"
          />
        </motion.div>
      )}
      {/* 스크롤 아이콘 */}
      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <HiOutlineChevronDoubleDown className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Intro;
