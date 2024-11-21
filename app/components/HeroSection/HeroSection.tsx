import { ReactNode } from "react";
import { FaBaby, FaHome, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

type AboutMeItem = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

const aboutMeItems: AboutMeItem[] = [
  {
    id: 1,
    icon: <FaUser className="text-slate-100" />,
    title: "이름",
    description: "김보겸",
  },
  {
    id: 2,
    icon: <FaBaby className="text-slate-100" />,
    title: "생일",
    description: "1995년 4월 18일",
  },
  {
    id: 3,
    icon: <FaHome className="text-slate-100" />,
    title: "집",
    description: "경기도 구리시",
  },
  {
    id: 4,
    icon: <IoIosMail className="text-slate-100" />,
    title: "메일",
    description: "95bogyeom@gmail.com",
  },

  {
    id: 5,
    icon: <FaPencil className="text-slate-100" />,
    title: "학력",
    description: "강원대학교 (컴퓨터과학과)",
  },
  {
    id: 6,
    icon: <GiWeightLiftingUp className="text-slate-100" />,
    title: "취미",
    description: "웨이트트레이닝",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col   gap-4 py-16 px-4 sm:p-20 justify-center">
        <Horizontal />

        <h1 className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold">
          안녕하세요.
          <br />
          주니어 개발자 김보겸입니다.
        </h1>

        <p className="text-sm sm:text-lg lg:text-xl  text-slate-300 mt-4">
          복잡한 문제를 간단히 해결하는 데 집중하며, <br />
          현재 프론트엔드 개발에 깊은 관심을 가진 개발자입니다.
        </p>

        <Horizontal />
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mb-6 border-b-2 border-slate-500 pb-2">
            About Me
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {aboutMeItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-700 p-2 sm:p-4  rounded-md shadow-md flex items-center  gap-4 "
              >
                <div className="text-lg sm:text-2xl ">{item.icon}</div>
                <div className="border-r-2 h-full" />
                <div>
                  <h2 className="text-white font-semibold">{item.title}</h2>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Horizontal />
      </div>
    </section>
  );
}

function Horizontal() {
  return <hr className="border-t border-2 border-gray-300  w-full" />;
}
