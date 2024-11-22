import { forwardRef } from "react";
import { AboutMeItem } from "../HeroSection";

interface CardProps {
  item: AboutMeItem;
  idx: number;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ item, idx }, ref) => (
  <div
    ref={ref}
    id={`card_${item.id}`}
    className={`${
      idx % 2 === 0 ? "bg-gray-600" : "bg-gray-700"
    } p-2 sm:p-4 rounded-md shadow-md flex items-center gap-4`}
  >
    <div className="text-lg sm:text-2xl">{item.icon}</div>
    <div className="border-r-2 h-full" />
    <div>
      <h2 className="text-white font-semibold">{item.title}</h2>
      <p className="text-slate-300">{item.description}</p>
    </div>
  </div>
));

Card.displayName = "Card";

export default Card;
