import { motion } from "framer-motion";

// 반응형 수정 필요

const Footer = () => {
  return (
    <footer className="relative w-full h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden">
      <motion.h3
        className="text-5xl font-extrabold text-gray-800 mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Thank You for Visiting!
      </motion.h3>

      <motion.p
        className="text-lg text-gray-600 text-center max-w-xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        프론트엔드 개발자로서 문제 해결과 창의적 구현에 최선을 다하며, <br />
        팀과 함께 성장하는 개발자가 되겠습니다.
      </motion.p>

      <div className="overflow-hidden whitespace-nowrap bg-transparent py-1 mt-4">
        <motion.div
          className="inline-block text-xs text-gray-300 tracking-widest font-light"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          © 2025 Sohyun Cho Portfolio. All rights reserved. — © 2025 Sohyun Cho
          Portfolio. All rights reserved. —
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
