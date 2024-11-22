"use client";
export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = 100; // 원하는 상단 여백
      window.scrollTo({
        top: window.scrollY + rect.top - offset, // 현재 스크롤 위치와 요소의 위치를 계산
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };
  return (
    <div
      className="fixed z-10 top-0 h-4 w-full sm:w-[100vh] mt-0 sm:mt-[100vh] text-2xl text-white rotate-0 sm:-rotate-90 mix-blend-exclusion
    origin-[0] "
    >
      <div className="flex flex-row sm:flex-row-reverse justify-between px-10 *:sm:rotate-180 p-4">
        <li>
          <button onClick={() => scrollToSection("section-hero")}>
            About Me
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("section-skill")}>
            Skills
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("career")}>Career</button>
        </li>
      </div>
    </div>
  );
}
