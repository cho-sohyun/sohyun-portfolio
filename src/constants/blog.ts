import { StaticImageData } from "next/image";
import blogImage from "@/assets/blog.png";
import gitHubImage from "@/assets/github.png";

export interface BlogData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export const BLOG_DATA: BlogData[] = [
  {
    id: 1,
    title: "기록을 위한 블로그",
    description:
      "더욱 성장하기 위해 공부한 내용을 정리해서 올릴 블로그를 운영하기 시작했으며, 이해한 개념과 학습한 내용을 블로그에 설명하듯이 기록하고 공유하여, 언제든지 개발에 적용할 수 있도록 노력하였습니다.",
    image: blogImage,
    link: "https://velog.io/@whthgus77/posts",
  },
  {
    id: 2,
    title: "깃 허브 저장소",
    description:
      "프로젝트 그리고 개발 공부의 결과물을 깃허브에 저장하고 있습니다. 실제 업무에 적응하기 위해 팀 프로젝트를 진행하며 팀원들과 코드 리뷰를 통해 더 나은 코드 작성을 고민하였습니다. 또한, 푸시 과정에서 발생하는 충돌 오류를 해결하며 실질적인 문제 해결 경험을 쌓고 있습니다.",
    image: gitHubImage,
    link: "https://github.com/cho-sohyun?tab=repositories",
  },
];
