"use client";

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
}: {
  ascii: string;

  height: number;
  width: number;
  blockSize: number;
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  xPosition?: string;
}) {
  return (
    <div
      className={`absolute max-w-[100vw] max-h-[100vh]  bottom-0 ${xPosition} text-gray-500 whitespace-pre text-[4px] md:text-[6px]  overflow-hidden`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width / blockSize}, auto)`, // 블록 열 개수
        fontFamily: "monospace",
        overflow: "hidden",
        pointerEvents: "none", // 상호작용 방지
      }}
    >
      {generateAsciiBlocks(ascii, blockSize, height, width).map(
        (block, index) => (
          <div
            ref={(el) => {
              if (el) refs.current[index] = el;
            }}
            key={index}
          >
            {block}
          </div>
        )
      )}
    </div>
  );
}

export default AsciiBackground;
