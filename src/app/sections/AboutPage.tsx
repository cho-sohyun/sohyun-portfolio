"use client";
import { motion } from "framer-motion";
import { AboutContents } from "@/constants/about";

const About = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center mt-20 px-6 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* 상단 자기소개 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3
          className="text-xs font-light text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          ABOUT ME
        </h3>
        <p className="mt-4 font-extrabold text-lg sm:text-xl text-gray-900">
          ‘Work-Life Balance’ 보다 몰입할 수 있는 일을 하는 삶을 추구합니다.
        </p>

        <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          저는 원래 커머스 MD로서 컨텐츠 및 프로모션을 기획하며 쇼핑의 즐거움을
          입력했었습니다. <br />
          개발자와 협업하며 기획한 서비스를 구현하면서 직접적으로 보여지는게
          신기하고 궁금해하며 개발에 입문하게 되었습니다.
          <br />
          사람들이 사용할 수 있는 서비스를 개발해서 제가 평소 컴퓨터를 사용하며
          느꼈던 편안함과 즐거움을 느낄 수 있게 해주고 싶습니다.
          <br />
          현재 개발 공부에 모든 시간을 투자하고 있으며, 늦은 만큼 남들보다 더
          열심히 배우고 있습니다.
        </p>
      </motion.div>

      <div className="flex flex-col w-full max-w-3xl mt-10">
        {AboutContents.map((item, index) => (
          <motion.div
            key={index}
            className="mt-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center">
              <span className="text-xl font-extrabold mr-1 text-gray-900">
                |
              </span>
              <h4 className="font-semibold p-2 flex-1 text-sm text-gray-900">
                {item.title}
              </h4>
            </div>
            <hr className="border-gray-200 my-2" />
            <p className="text-sm font-normal text-gray-900">{item.content}</p>
          </motion.div>
        ))}

        <div className="mt-14 bg-[#f9bf3f]">
          <p className="text-sm sm:text-base font-bold pl-6 pt-6 pb-6 italic text-gray-900">
            앞으로 더 가치있는 개발자가 되고싶습니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
