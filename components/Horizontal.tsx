import { forwardRef } from "react";

const Horizontal = forwardRef<HTMLHRElement, unknown>((_, ref) => {
  return <hr ref={ref} className="border-t border-2 border-gray-300 w-full" />;
});

Horizontal.displayName = "Horizontal";

export default Horizontal;
