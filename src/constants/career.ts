export interface CareerData {
  year: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  align: "start" | "end";
}

export const CAREER_DATA: CareerData[] = [
  {
    year: "2014",
    title: "최종학력",
    company: "라사라 패션디자인전문학교",
    period: "2014.03 ~ 2019.08",
    description: ["패션비즈니스학과 전공"],
    align: "start",
  },
  {
    year: "2019",
    title: "온라인 e커머스 MD",
    company: "(주)삼아인터내셔날",
    period: "2019.08 ~ 2021.11 (2년 4개월)",
    description: [
      "온라인 e커머스 대리로‘운영/계약/영업/기획/정산’관련 전반적인 업무를 수행",
      "[운영] 공공기관/회계법인/금융사/대기업 등 제휴 복지 플랫폼 운영",
      "[계약] 계약 절차 관리 및 제휴사 커뮤니케이션",
      "[영업] 신규 브랜드 발굴, 상품 소싱 및 판매 전략 수립",
      "[기획] 프로모션, 이벤트, 기획전 기획 및 협업",
      "[정산] 제휴 파트너사/제휴몰/B2B 특판 정산",
    ],
    align: "end",
  },
  {
    year: "2022",
    title: "APP 쇼핑 MD",
    company: "주식회사 포크홀딩스",
    period: "2022.04 ~ 2022.10 (7개월)",
    description: [
      "[운영] APP 전용 쇼핑몰 운영",
      "[계약] 계약 절차 관리 및 제휴사 커뮤니케이션",
      "[영업] 신규 브랜드 발굴 및 상품 소싱, 매출 활성화",
      "[기획] 프로모션/이벤트/기획전 기획 및 협업",
    ],
    align: "start",
  },
  {
    year: "2023",
    title: "제로베이스",
    company: "교육 부트캠프 수료",
    period: "2023.03 ~ 2023.09",
    description: [
      "프론트엔드 기본 언어 및 개발 지식 학습",
      "HTML, CSS, JavaScript, TypeScript, React",
      "자료구조/알고리즘, CS 이론",
      "팀 협업 프로젝트 경험",
    ],
    align: "end",
  },
  {
    year: "2024",
    title: "현재",
    company: "강의 수강",
    period: "2024.01 ~ 현재",
    description: [
      "효율적인 상태 관리 및 최신 라이브러리 학습",
      "제로베이스, 노마드코더, 스파르타코딩클럽, 인프런, 코딩알려주는 누나등 강의 수강",
      "심도 깊은 프로젝트 실습",
      "팀 협업 프로젝트 경험",
    ],
    align: "start",
  },
];
