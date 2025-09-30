import { StaticImageData } from "next/image";
import chalkak from "@/assets/projects/project1/chalkak-main.gif";
import netflix from "@/assets/projects/project3/netflix-main.gif";
import subtube from "@/assets/projects/project2/subtube-main.gif";
import marketZero from "@/assets/projects/project4/marketzero-main.gif";
import cryptoTracker from "@/assets/projects/project5/cryptoTracker-main.gif";
import shopping from "@/assets/projects/project6/shopping-main.gif";
import weatherApp from "@/assets/projects/project7/weatherApp-main.gif";
import game from "@/assets/projects/project8/game-main.gif";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  detail: string;
  notionUrl: string;
  githubUrl?: string;
  blogUrl?: string;
  siteUrl?: string;
}

export const PROJECT_DATA: ProjectData[] = [
  {
    id: 1,
    title: "#찰칵 Chal-kak (팀 프로젝트)",
    description:
      "사용자 맞춤형 게시글 추천 패션 SNS입니다. 이 프로젝트는 옷으로 누구나 맞이했던 온갖 경험들에서 시작하여, 고민을 해결하기 위해 기획하게 되었습니다.",
    image: chalkak,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/2782eaac60aa801cb95ed62f0e84346a?v=2782eaac60aa81ff8411000c1ad1a4d6",
    githubUrl: "https://github.com/ZB-ChalKak",
    blogUrl:
      "https://velog.io/@whthgus77/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B0%B0%EC%B9%B5-%ED%9A%8C%EA%B3%A0%EB%A1%9D",
  },

  {
    id: 2,
    title: "Subtube (팀 프로젝트)",
    description:
      "평소 자신이 관심을 가지고 좋아하는 영상을 검색하여 자막과 함께 영어 공부를 할 수 있는 사이트를 구성했습니다.",
    image: subtube,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27a2eaac60aa80f0a577dcca98ded06b?v=27a2eaac60aa8177b61f000caf295c91",
    githubUrl: "https://github.com/Better-Tmr/SubTube-fe/tree/main",
    siteUrl: "https://better-tmr.netlify.app/",
  },

  {
    id: 3,
    title: "Netflix",
    description:
      "가장 인기있는 영화 리스트, 가장 평점 좋은 영화 리스트, 상영 예정작 리스트를 볼 수 있는 사이트 입니다.",
    image: netflix,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27a2eaac60aa80b2a475fbf7f502a9a8?v=27a2eaac60aa8153945e000cb7496249",

    githubUrl: "https://github.com/cho-sohyun/netflix-project",
    siteUrl: "https://netflix-project-kappa.vercel.app/",
  },
  {
    id: 4,
    title: "market-zero",
    description:
      "웹 쇼핑몰을 꼭 한번 만들어보고 싶은 첫번째 바램으로 시작되었습니다. 사용자가 보기에 가장 UI가 깔끔하면서 가장 한눈에 보기 쉽고 이용하는 서비스 또한 기능도 충실 하다고 생각하여 마켓컬리를 래퍼런스로 구현했습니다.",
    image: marketZero,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27d2eaac60aa80b2bad3d4f27e12a63c?v=27d2eaac60aa81acb84d000cc55320e4",
    githubUrl: "https://github.com/cho-sohyun/market-frontend",
    siteUrl: "https://marketzero-frontend.vercel.app/",
    blogUrl:
      "https://velog.io/@whthgus77/JSON-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A1%9C-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0",
  },
  {
    id: 5,
    title: "crypto-tracker",
    description:
      "실시간 가격, 시가총액, 거래량 등 암호화폐 시장 정보를 확인할 수 있는 사이트입니다.",
    image: cryptoTracker,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27d2eaac60aa809d9432dd55cc1b813d?v=27d2eaac60aa8157907c000c8c95abf1",
    githubUrl: "https://github.com/cho-sohyun/Crypto-Tracker.git",
    siteUrl: "https://crypto-tracker-seven-ashy.vercel.app/",
  },
  {
    id: 6,
    title: "쇼핑몰 웹사이트",
    description:
      "간략한 쇼핑몰 웹사이트 입니다. 로그인, 디테일, 상품 검색을 구현했습니다.",
    image: shopping,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27d2eaac60aa80f89581c5eb378ff633?v=27d2eaac60aa8186ab29000cdf15a183",
    githubUrl: "https://github.com/cho-sohyun/shopping-website-project.git",
    siteUrl: "https://shopping-website-project-kappa.vercel.app/",
  },
  {
    id: 7,
    title: "날씨 정보 앱",
    description:
      "현재 위치의 날씨 정보를 불러올 수 있습니다. 다른 지역을 선택하여 해당 지역의 날씨 정보를 볼 수 있습니다.",
    image: weatherApp,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27e2eaac60aa80e7b59fcfb175576dba?v=27e2eaac60aa8199abb0000c2c95b97c",
    githubUrl: "https://github.com/cho-sohyun/toy-project-weatherApp.git",
    siteUrl: "https://toy-project-weather-app.vercel.app/",
  },
  {
    id: 8,
    title: "가위바위보 게임",
    description: "컴퓨터와 가위바위보 게임을 할 수 있습니다.",
    image: game,
    detail: "상세보기",
    notionUrl:
      "https://quiet-roof-cf4.notion.site/ebd/27e2eaac60aa80db8f2aeeed6ad4c425?v=27e2eaac60aa81acbec3000cf39d668e",
    githubUrl:
      "https://github.com/cho-sohyun/toy-project-rockpaperscissors.git",
    siteUrl: "https://toy-project-rockpaperscissors.vercel.app/",
  },
  {
    id: 9,
    title: "개인 포트폴리오 사이트",
    description: "저만의 포트폴리오 사이트를 제작했습니다.",
    image: game,
    detail: "상세보기",
    notionUrl:
      "https://www.notion.so/Portfolio-Site-Project-7d6c5b4a3a2b1c0d9e8f7g6h5i4j3k2l",
  },
];
