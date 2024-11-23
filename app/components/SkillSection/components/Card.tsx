import { forwardRef } from "react";
import { SkillItem } from "../SkillSection";

interface CardProps {
  category: string;
  items: SkillItem[];
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ category, items }, ref) => (
    <div
      ref={ref}
      className="p-2 sm:p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col"
    >
      <h2 className="text-md sm:text-xl lg:text-2xl font-semibold text-slate-100 capitalize mb-2">
        {category}
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg ${item.bg} ${item.text} text-sm sm:text-base`}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
);

Card.displayName = "SkillCard";

export default Card;
