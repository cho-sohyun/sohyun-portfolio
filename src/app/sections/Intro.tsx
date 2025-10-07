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
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/5"></div>

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
                className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-[10rem] font-bold text-white whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ y: -70, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Front-End
              </motion.h1>
            )}

            <p className="text-2xl sm:text-3xl md:text-5xl font-normal text-black mb-4">
              프론트엔드 개발자 <span className="font-bold">조소현</span>입니다.
            </p>
            <p className="text-xs md:text-[14px] text-gray-800 px-1 md:px-0">
              협력의 힘으로 성장하며, 포기하지 않고 끊임없이 노력하며
              나아갑니다.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* intro 이미지 */}
      {step === "image" && (
        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={profileImg}
            alt="프로필"
            width={240}
            height={240}
            className="rounded-full"
          />
        </motion.div>
      )}
      {/* 스크롤 아이콘 */}
      <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <HiOutlineChevronDoubleDown className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
    </div>
  );
};

export default Intro;
