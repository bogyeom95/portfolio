"use client";
import Horizontal from "@/components/Horizontal";
import { useRef } from "react";
import {
  animateCards,
  animateHorizontal,
  animateSplitText,
} from "../animations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CareerList from "./components/CareerList";
gsap.registerPlugin(ScrollTrigger);
export default function CareerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const horizontalRefs = useRef<HTMLHRElement[]>([]);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(animateSplitText(titleRef, { y: -30 }), 0)
      .add(animateHorizontal(horizontalRefs.current), 0)
      .add(animateCards(cardRefs.current), 0);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      animation: tl,

      toggleActions: "restart none restart none",
    });
  }, []);

  return (
    <section ref={containerRef} className=" w-screen">
      <div className="flex flex-col pt-20  gap-4  px-4 sm:p-20 justify-center">
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[0] = el;
          }}
        />
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold"
        >
          Careers
        </h1>
        <Horizontal
          ref={(el) => {
            if (el) horizontalRefs.current[1] = el;
          }}
        />
        <div ref={cardWrapperRef}>
          <CareerList careers={careerItems} cardRefs={cardRefs} />
        </div>
      </div>
    </section>
  );
}

export type TechStack = {
  category: string;
  items: string[];
};

export type CareerItem = {
  id: number;
  company: string;
  title: string;
  descriptions: string[];
  activityPeriod: string;
  myRole: string;
  techStack: TechStack[];
};

export const careerItems: CareerItem[] = [
  {
    id: 4,
    company: "크리스타비전",
    title: "AI 안저판독 보조 프로그램 개발",
    descriptions: [
      "Spring AOP, Redis 분산 락을 활용해 동시성 문제를 해결했습니다.",
      "DB 스키마를 DICOM 표준에 맞춰 재설계하여 기존 의료 시스템과의 호환성을 확보했습니다.",
      "Flask, Gunicorn, Celery(+RabbitMQ) 기반 비동기 작업 큐를 구축해 AI 추론 스케줄링을 최적화하고, 기존 GPU 과부하로 인한 서버 다운 문제를 해결했습니다.",
      "GMP 3등급 인증 심사에 품질 책임자 역할로 문서 작성 및 심사 대응을 담당하여 적합인증을 획득했습니다.",
    ],
    activityPeriod: "2024.12 - 2025.4",
    myRole: "풀스택 개발",
    techStack: [
      {
        category: "Frontend",
        items: [
          "React(18.x)",
          "Next.js(14.x)",
          "Typescript",
          "TailwindCSS",
          "React Query",
          "Zustand",
          "Context API",
        ],
      },
      {
        category: "Backend",
        items: [
          "Java(17.x)",
          "Spring",
          "JPA",
          "QueryDSL",
          "JdbcTemplate",
          "Swagger",
        ],
      },
      {
        category: "Model Serving",
        items: ["Python", "Flask", "Gunicorn", "Celery"],
      },
      {
        category: "Infrastructure/DevOps",
        items: ["Nginx", "Docker", "Jenkins", "On-Premise Server"],
      },
      {
        category: "Database",
        items: ["MySQL(8.x)", "Redis"],
      },
      {
        category: "Messaging",
        items: ["RabbitMQ"],
      },
      {
        category: "Etc",
        items: ["Figma", "Whimsical", "Notion", "Slack", "Jira", "Confluence"],
      },
    ],
  },

  {
    id: 3,
    company: "디지털메딕",
    title: "노코드 플랫폼 개발",
    descriptions: [
      "관리자가 개발팀 개입 없이 UI를 통해 설문, 척도검사를 직접 생성하고 사용 할 수 있는 노코드 환경을 설계하고 개발했습니다.",
      "정신건강 관리에 필요한 콘텐츠 관리를 위해 CMS 기능을 설계하고 개발했습니다.",
      "사용자의 콘텐츠 시청 이력 및 설문 응답 데이터에 대한 분석 및 시각화 기능을 개발했습니다.",
    ],
    activityPeriod: "2023.10 - 2024.09",
    myRole: "풀스택 개발",
    techStack: [
      {
        category: "Frontend",
        items: [
          "React(18.x)",
          "Typescript",
          "React Query",
          "Context API",
          "Bootstrap",
          "SCSS",
          "CSS ",
        ],
      },
      {
        category: "Backend",
        items: [
          "Java(17.x)",
          "Spring",
          "JPA",
          "QueryDSL",
          "JdbcTemplate",
          "Swagger",
        ],
      },
      {
        category: "Infrastructure/DevOps",
        items: ["Nginx", "Docker", "GitHub Actions"],
      },
      {
        category: "Cloud Services",
        items: ["NCP Server", "NCP Cloud DB for MySQL", "NCP Object Storage"],
      },
      {
        category: "Etc",
        items: ["Figma", "Whimsical", "Slack", "Redmine", "Microsoft Teams"],
      },
    ],
  },

  {
    id: 2,
    company: "디지털메딕",
    title: "스마트 환자 관리 시스템 개발",
    descriptions: [
      "RTLS 데이터로 대시보드를 구성하는 프로젝트에서 데이터 집계 및 조회 API 개발을 담당했습니다.",
      "MongoDB(Time Series Collection)을 활용해 실시간 데이터 저장 및 조회 성능을 최적화했습니다.",
      "RabbitMQ를 도입하여 데이터 유실을 방지하고, Batch Insert를 통해 저장 효율성을 향상시켰습니다.",
    ],
    activityPeriod: "2023.08 - 2023.09",
    myRole: "백엔드 개발",
    techStack: [
      {
        category: "Backend",
        items: ["Java(17.x)", "Spring"],
      },
      {
        category: "Database",
        items: ["MongoDB (Time Series Collection)"],
      },
      {
        category: "Messaging",
        items: ["RabbitMQ"],
      },
      {
        category: "Infrastructure/DevOps",
        items: ["Nginx", "Docker", "GitHub Actions"],
      },
      {
        category: "Cloud Services",
        items: ["NCP Server", "NCP Object Storage"],
      },
      {
        category: "Etc",
        items: ["Postman", "Whimsical", "Slack", "Redmine"],
      },
    ],
  },

  {
    id: 1,
    company: "엘핀",
    title: "빌딩챗 - 신규 프로젝트 개발 (프로토타입)",
    descriptions: [
      "위치 인증을 기반으로 같은 빌딩 내 사용자들 간에 익명 게시판 서비스를 제공하는 앱 개발 프로젝트에 참여했습니다.",
      "프론트엔드, 기획팀과 협업하여 초기 기획부터 배포까지 전 과정에 참여해볼 수 있었습니다.",
    ],
    activityPeriod: "2021.09 - 2021.12",
    myRole: "백엔드 개발 (인턴)",
    techStack: [
      {
        category: "Backend",
        items: ["Java(11.x)", "Spring", "JPA", "QueryDSL"],
      },
      {
        category: "Infrastructure",
        items: ["Nginx"],
      },
      {
        category: "Cloud Services",
        items: [
          "EC2 (AWS)",

          "RDS (AWS)",
          "S3 (AWS)",

          "Lambda (AWS)",
          "SENS (NCP)",
        ],
      },

      {
        category: "Etc",
        items: ["Postman", "dbdiagram", "Slack", "Trello"],
      },
    ],
  },
];

// export const careerItems: CareerItem[] = [
//   {
//     id: 1,
//     company: "크리스타비전",
//     title: "안저판독 보조 AI 프로그램 개발",
//     descriptions: [
//       "안저 이미지를 분석하여 질병을 판별하는 AI 모델을 개발했습니다.",
//       "AI 모델의 성능을 평가하기 위한 웹 기반의 판독 보조 도구를 개발했습니다.",
//       "AI 모델의 성능을 평가하기 위한 웹 기반의 판독 보조 도구를 개발했습니다.",
//     ],
//     activityPeriod: "2024.12 - 2025.4",
//     myRole: "풀스택 개발",
//     techStack: [
//       "React(18.x)",
//       "Next.js(14.x)",
//       "Typescript",
//       "TailwindCSS",
//       "React Query",
//       "Zustand",
//       "Java(17.x)",
//       "Spring",
//       "JPA",
//       "QueryDSL",
//       "JdbcTemplate",
//       "Nginx",
//       "Docker",
//       "Jenkins",
//       "Onpremise Server",
//       "MySQL(8.x)",
//       "Redis",
//       "RabbitMQ",
//       "Python",
//       "Flask",
//       "Gunicorn",
//       "Celery",
//     ],
//   },

//   {
//     id: 2,
//     company: "디지털메딕",
//     // image: "/career/survey.webp",
//     title: "노코드 플랫폼 개발",
//     descriptions: [
//       "관리자가 UI를 통해 설문, 척도검사를 생성하고 관리할 수 있는 노코드 환경을 설계하고 개발했습니다.",
//       "정신건강 관리에 필요한 콘텐츠 관리를 위해 CMS 기능을 설계하고 개발했습니다.",
//       "사용자의 시청 이력 및 설문 응답 데이터에 대한 분석 및 시각화 기능을 개발했습니다.",
//     ],
//     activityPeriod: "2023.10 - 2024.09",
//     myRole: "풀스택 개발",
//     techStack: [
//       "React(18.x)",
//       "Typescript",
//       "Java17",
//       "Spring",
//       "JPA",
//       "QueryDSL",
//       "JdbcTemplate",
//       "Nginx",
//       "Docker",
//       "GitHub Actions",
//       "NCP Server",
//       "NCP Cloud DB for MySQL",
//       "NCP Object Storage",
//     ],
//   },
//   {
//     id: 3,
//     company: "디지털메딕",
//     // image: "/career/smart_management.webp",
//     title: "스마트 환자 관리 시스템 개발",
//     descriptions: [
//       "RTLS 데이터로 대시보드를 구성하는 프로젝트에서 데이터 집계 및 조회 API 개발을 담당했습니다.",
//       "MongoDB(Time Series Collection)을 활용해 실시간 데이터 저장 및 조회 성능을 최적화했습니다.",
//       "RabbitMQ를 도입하여 데이터 유실을 방지하고, Batch Insert를 통해 저장 효율성을 향상시켰습니다.",
//     ],
//     activityPeriod: "2023.08 - 2023.09",
//     myRole: "백엔드 개발",
//     techStack: [
//       "Java17",
//       "Spring",
//       "MongoDB (Time Series Collection)",
//       "RabbitMQ",
//       "Nginx",
//       "Docker",
//       "GitHub Actions",
//       "NCP Server",
//       "NCP Object Storage",
//     ],
//   },
//   {
//     id: 4,
//     company: "엘핀",
//     // image: "/career/buildingchat.webp",
//     title: "빌딩챗 - 신규 프로젝트 개발 (프로토타입)",
//     descriptions: [
//       "위치 인증을 기반으로 같은 빌딩 내 사용자들 간에 익명 게시판 서비스를 제공하는 앱 개발 프로젝트에 참여했습니다.",
//       "프론트엔드, 기획팀과 협업하여 초기 기획부터 배포까지 전 과정에 참여해볼 수 있었습니다.",
//     ],
//     activityPeriod: "2021.09 - 2021.12",
//     myRole: "백엔드 개발 (인턴)",
//     techStack: [
//       "Java11",
//       "Spring",
//       "JPA",
//       "QueryDSL",
//       "RDS (AWS)",
//       "S3 (AWS)",
//       "EC2 (AWS)",
//       "Lambda (AWS)",
//       "Nginx",
//       "Postman",
//       "dbdiagram",
//     ],
//   },
// ];
