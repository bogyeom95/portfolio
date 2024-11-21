import Horizontal from "@/components/Horizontal";

type SkillItem = {
  name: string; // 기술 이름
  bg: string; // 배경색 클래스 (TailwindCSS)
  text: string; // 텍스트 색상 클래스 (TailwindCSS)
};

type Skills = {
  [category: string]: SkillItem[]; // 각 카테고리는 SkillItem 배열
};

const skills: Skills = {
  language: [
    { name: "Typescript", bg: "bg-blue-700", text: "text-white" },
    { name: "JavaScript", bg: "bg-yellow-500", text: "text-black" },
    { name: "Java", bg: "bg-red-600", text: "text-white" },
  ],
  frontend: [
    { name: "React", bg: "bg-blue-400", text: "text-white" },
    { name: "Next.js", bg: "bg-gray-900", text: "text-white" },
    { name: "Bootstrap", bg: "bg-purple-600", text: "text-white" },
    { name: "TailwindCSS", bg: "bg-teal-500", text: "text-white" },
    { name: "gsap", bg: "bg-green-500", text: "text-white" },
  ],
  backend: [
    { name: "Spring", bg: "bg-green-700", text: "text-white" },
    { name: "JPA", bg: "bg-indigo-600", text: "text-white" },
    { name: "QueryDSL", bg: "bg-teal-600", text: "text-white" },
    { name: "JdbcTemplate", bg: "bg-yellow-500", text: "text-black" },
  ],
  database: [
    { name: "MySQL", bg: "bg-blue-500", text: "text-white" },
    {
      name: "MongoDB ",
      bg: "bg-green-600",
      text: "text-white",
    },
  ],
  etc: [
    { name: "NCP", bg: "bg-green-800", text: "text-white" },
    { name: "AWS ", bg: "bg-orange-600", text: "text-white" },
    { name: "GitHub Actions", bg: "bg-purple-600", text: "text-white" },
    { name: "Docker", bg: "bg-blue-600", text: "text-white" },
    {
      name: "Watchtower",
      bg: "bg-gray-600",
      text: "text-white",
    },
  ],
};

export default function SkillSection() {
  return (
    <section className="relative w-screen h-screen  mt-20 sm:mt-0">
      <div className="w-full h-full flex flex-col   gap-4 py-16 px-4 sm:p-20 justify-center ">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl text-slate-100   font-bold">
          My Skills
        </h1>

        <Horizontal />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-100 capitalize mb-2">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg ${item.bg} ${item.text} text-sm sm:text-base`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
