import { forwardRef } from "react";

const Horizontal = forwardRef<HTMLHRElement, {}>((_, ref) => {
  return <hr ref={ref} className="border-t border-2 border-gray-300 w-full" />;
});

export default Horizontal;
