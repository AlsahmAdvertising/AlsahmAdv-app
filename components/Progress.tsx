import { usePathname } from "next/navigation";
import React from "react";

const Progress = ({ currentPage }: { currentPage: number }) => {
  const classNames = [
    "-translate-x-full",
    "-translate-x-3/4",
    "-translate-x-1/2",
    "-translate-x-1/4",
    "-translate-x-0",
  ];
  const pathname = usePathname();

  return (
    !pathname.includes("categories") && (
      <nav className="bg-transparent transition-all h-3 sticky top-0 z-[99999]">
        <span
          className={`absolute bg-white border border-[#1b6152] h-[66.67%] rounded-3xl  w-full bottom-0 left-0 ${classNames[currentPage]} duration-1000 ease-in-out  transition-all  `}
        ></span>
      </nav>
    )
  );
};

export default Progress;
