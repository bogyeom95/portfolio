"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function generateAsciiBlocks(
  asciiArt: string,
  size: number,
  maxHeight: number,
  maxWidth: number
): string[] {
  const blocks: string[] = [];

  const lines = asciiArt.split("\n");

  while (lines.length < maxHeight) {
    lines.push(""); // 부족한 줄은 빈 줄로 추가
  }

  // 각 줄이 빈 문자열(`''`)인 경우 공백으로 대체하고 길이 맞추기
  const paddedLines = lines.map((line) =>
    line.length < maxWidth
      ? line.padEnd(maxWidth, " ")
      : line.substring(0, maxWidth)
  );

  for (let row = 0; row < maxHeight; row += size) {
    for (let col = 0; col < maxWidth; col += size) {
      let block = "";

      for (let r = row; r < row + size && r < maxHeight; r++) {
        const lineSegment = paddedLines[r]
          .substring(col, col + size)
          .padEnd(size, " "); // 부족한 부분은 공백으로 채움
        block += lineSegment + "\n";
      }

      blocks.push(block.trimEnd());
    }
  }

  return blocks;
}

function AsciiBackground({
  ascii,

  height,
  width,
  blockSize,
  refs,
  xPosition = "right-0",
  animate = false,
}: {
  ascii: string;

  height: number;
  width: number;
  blockSize: number;
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  xPosition?: string;
  animate?: boolean;
}) {
  const { contextSafe } = useGSAP();

  const cols = Math.ceil(width / blockSize);
  const rows = Math.ceil(height / blockSize);

  const news = [
    { dx: 0, dy: -1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
  ];

  const cross = [
    { dx: -1, dy: -1 },
    { dx: 1, dy: -1 },
    { dx: -1, dy: 1 },
    { dx: 1, dy: 1 },
  ];

  const getIndex = (row: number, col: number) =>
    row >= 0 && row < rows && col >= 0 && col < cols ? row * cols + col : -1;

  const handleMouseOver = contextSafe((index: number) => {
    const row = Math.floor(index / cols);
    const col = index % cols;

    const affectedNewsIndices = news
      .map(({ dx, dy }) => getIndex(row + dy, col + dx))
      .filter((i) => i !== -1);

    const affectedCrossIndices = cross
      .map(({ dx, dy }) => getIndex(row + dy, col + dx))
      .filter((i) => i !== -1);

    [...affectedNewsIndices, ...affectedCrossIndices].forEach((i) => {
      gsap.to(refs.current[i], {
        scale: 1.1,
        duration: 1,
        color: "#9ca3af",
        ease: "back.out(3)",
      });
    });

    gsap.to(refs.current[index], {
      scale: 1.2,
      duration: 1,
      color: "#d1d5db",
      ease: "back.out(3)",
    });
  });

  const handleMouseLeave = contextSafe((index: number) => {
    const row = Math.floor(index / cols);
    const col = index % cols;

    const affectedNewsIndices = news
      .map(({ dx, dy }) => getIndex(row + dy, col + dx))
      .filter((i) => i !== -1);

    const affectedCrossIndices = cross
      .map(({ dx, dy }) => getIndex(row + dy, col + dx))
      .filter((i) => i !== -1);

    [index, ...affectedCrossIndices, ...affectedNewsIndices].forEach((i) => {
      gsap.to(refs.current[i], {
        scale: 1,
        duration: 1,
        color: "#6b7280",
        ease: "back.out(3)",
      });
    });
  });

  return (
    <div
      className={`absolute max-w-[100vw] max-h-[100vh]  bottom-0 ${xPosition} cursor-pointer ${animate ? "" : "pointer-events-none"}  text-gray-500 whitespace-pre text-[5px]   md:text-[6px] leading-[5px] md:leading-[6px]  overflow-hidden`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width / blockSize}, auto)`, // 블록 열 개수
        fontFamily: "monospace",
      }}
    >
      {generateAsciiBlocks(ascii, blockSize, height, width).map(
        (block, index) => (
          <div
            ref={(el) => {
              if (el) refs.current[index] = el;
            }}
            key={index}
            onMouseOver={() => {
              if (animate) handleMouseOver(index);
            }}
            onMouseLeave={() => {
              if (animate) handleMouseLeave(index);
            }}
          >
            {block}
          </div>
        )
      )}
    </div>
  );
}

export default AsciiBackground;
