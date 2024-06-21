import { usePathname } from "next/navigation";
import React from "react";

const Progress = ({ currentPage }: { currentPage: number }) => {
  const classNames = [
    "-translate-x-full",
    "-translate-x-3/4",
    "-translate-x-1/2",
    "-translate-x-1/4",
    "-translate-x-[2%]",
  ];
  const pathname = usePathname();

  return (
    !pathname.includes("categories") && (
      <nav className="bg-transparent  transition-all  items-center justify-center h-2 sticky top-0 z-[99999]">
        <span
          className={`absolute bg-white border border-primary bottom-0 rounded-sm w-[102%]  h-[90%]  ${classNames[currentPage]} duration-1000 ease-in-out  transition-all  `}
        ></span>
      </nav>
    )
  );
};

export default Progress;
