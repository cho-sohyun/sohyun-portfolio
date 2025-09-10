import { StaticImageData } from "next/image";
import chalkak from "@/assets/projects/chalkak-main.gif";
import netflix from "@/assets/projects/netflix-main.gif";
import subtube from "@/assets/projects/subtube-main.gif";
import marketZero from "@/assets/projects/marketzero-main.gif";
import cryptoTracker from "@/assets/projects/cryptoTracker-main.gif";
import shopping from "@/assets/projects/shopping-main.gif";
import weatherApp from "@/assets/projects/weatherApp-main.gif";
import game from "@/assets/projects/game-main.gif";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  detail: string;
}

export const PROJECT_DATA: ProjectData[] = [
  {
    id: 1,
    title: "#찰칵 Chal-kak (팀 프로젝트)",
    description:
      "사용자 맞춤형 게시글 추천 패션 SNS입니다. 이 프로젝트는 옷으로 누구나 맞이했던 온갖 경험들에서 시작하여, 고민을 해결하기 위해 기획하게 되었습니다.",
    image: chalkak,
    detail: "상세보기",
  },

  {
    id: 2,
    title: "Subtube (팀 프로젝트)",
    description:
      "평소 자신이 관심을 가지고 좋아하는 영상을 검색하여 자막과 함께 영어 공부를 할 수 있는 사이트를 구성했습니다.",
    image: subtube,
    detail: "상세보기",
  },

  {
    id: 3,
    title: "Netflix",
    description:
      "가장 인기있는 영화 리스트, 가장 평점 좋은 영화 리스트, 상영 예정작 리스트를 볼 수 있는 사이트 입니다.",
    image: netflix,
    detail: "상세보기",
  },
  {
    id: 4,
    title: "market-zero",
    description:
      "웹 쇼핑몰을 꼭 한번 만들어보고 싶은 첫번째 바램으로 시작되었습니다. 사용자가 보기에 가장 UI가 깔끔하면서 가장 한눈에 보기 쉽고 이용하는 서비스 또한 기능도 충실 하다고 생각하여 마켓컬리를 래퍼런스로 구현했습니다.",
    image: marketZero,
    detail: "상세보기",
  },
  {
    id: 5,
    title: "crypto-tracker",
    description:
      "실시간 가격, 시가총액, 거래량 등 암호화폐 시장 정보를 확인할 수 있는 사이트입니다.",
    image: cryptoTracker,
    detail: "상세보기",
  },
  {
    id: 6,
    title: "쇼핑몰 웹사이트",
    description:
      "간략한 쇼핑몰 웹사이트 입니다. 로그인, 디테일, 상품 검색을 구현했습니다.",
    image: shopping,
    detail: "상세보기",
  },
  {
    id: 7,
    title: "날씨 정보 앱",
    description:
      "현재 위치의 날씨 정보를 불러올 수 있습니다. 다른 지역을 선택하여 해당 지역의 날씨 정보를 볼 수 있습니다.",
    image: weatherApp,
    detail: "상세보기",
  },
  {
    id: 8,
    title: "가위바위보 게임",
    description: "컴퓨터와 가위바위보 게임을 할 수 있습니다.",
    image: game,
    detail: "상세보기",
  },
  {
    id: 0,
    title: "개인 포트폴리오 사이트",
    description: "저만의 포트폴리오 사이트를 제작했습니다.",
    image: game,
    detail: "상세보기",
  },
];
