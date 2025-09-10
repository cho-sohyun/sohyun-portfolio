"use client";
import { BLOG_DATA } from "@/constants/blog";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  return (
    <motion.section
      id="blog"
      className="flex flex-col items-center mt-30 p-8 min-h-screen"
      initial={{ opacity: 0 }} // 초기 상태
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 종료 상태
      transition={{ duration: 1.2 }} // 애니메이션 지속 시간
    >
      <motion.div
        className="md:w-4/5 md:pl-8 mx-auto"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      >
        <h3
          className="text-xs font-light text-gray-500"
          style={{ letterSpacing: "6px" }}
        >
          write & Read
        </h3>
        <p className="mt-4 font-extrabold text-xl">BLOG & GITHUB</p>
      </motion.div>

      <div className="w-full flex flex-wrap justify-center mt-8 gap-6">
        {BLOG_DATA.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>

      <div className="w-full mt-14 text-lg font-medium bg-gray-100 mx-auto p-6 md:w-4/5 md:pl-8">
        <p className="text-xl text-start">🙋🏻‍♀️ HOW I WORK !</p>
        <ul className="mt-4 text-sm text-gray-700">
          <li className="pb-2">
            목표 달성도 중요하지만, 일의 과정에서 재미를 찾는 편이에요.
          </li>
          <li className="pb-2">
            회사와 세상에 긍정적 영향을 주는 일은 그 자체로 동기부여가 됩니다.
          </li>
          <li className="pb-2">
            문제가 생겨도 그 상황 안에서 일을 진행할 수 있는 방향을 찾습니다.
          </li>
          <li className="pb-2">함께 정한 기한은 반드시 지키려고 노력해요.</li>
          <li className="pb-2">팀과의 소통이 제일 중요하다고 생각합니다.</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default BlogPage;
