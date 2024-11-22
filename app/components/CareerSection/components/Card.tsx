import Image from "next/image";
import { CareerItem } from "../CareerSection";
import { forwardRef } from "react";

interface CardProps {
  career: CareerItem;
}
const Card = forwardRef<HTMLDivElement, CardProps>(({ career }, ref) => (
  <div
    ref={ref}
    className="flex flex-col lg:flex-row border rounded-lg gap-2 w-full bg-gray-800"
  >
    {/* 이미지 영역 */}
    {/* 이미지 영역 */}
    <div className="relative w-full lg:w-1/4 h-32 lg:h-auto rounded-lg overflow-hidden">
      <Image
        src={career.image}
        className="object-cover"
        fill
        alt={career.title}
      />
    </div>
    {/* 텍스트 영역 */}
    <div className="w-full flex flex-col text-slate-100 font-medium p-2 text-sm lg:text-base xl:text-lg">
      {/* 제목 */}
      <h2 className="text-base lg:text-lg xl:text-xl">{career.title}</h2>

      {/* 설명 */}
      <ul className="mt-2 space-y-1">
        {career.descriptions.map((desc, index) => (
          <li key={index} className="text-slate-300 flex items-center">
            <span className="mr-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
      <hr className="border-t border-slate-500 my-2" />

      {/* 회사 */}
      <div className="text-xs lg:text-sm text-slate-300">
        <strong>회사:</strong> {career.company}
      </div>
      {/* 역할 */}
      <div className="text-xs lg:text-sm text-slate-300">
        <strong>역할:</strong> {career.myRole}
      </div>
      {/* 기간 */}
      <div className=" text-xs lg:text-sm text-slate-300">
        <strong>기간:</strong> {career.activityPeriod}
      </div>
      {/* 기술 스택 */}

      <hr className="border-t border-slate-500 my-2" />

      <div className="text-xs lg:text-sm text-slate-300">
        <strong>기술:</strong> {career.techStack.join(", ")}
      </div>
    </div>
  </div>
));

Card.displayName = "CareerCard";

export default Card;
