"use client";
import Slide from "./Slide";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Home from "./Home";
import Contact from "./Contact";
const SlideList = ({ Categories }: { Categories: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pathname = usePathname() ?? "";
  const [page, setPage] = useState(pathname);
  const [category, setCategory] = useState(false);
  useEffect(() => {
    if (pathname === "/categories") {
      setCategory(true);
    } else if (pathname === "/") {
      setCategory(false);
    }
  }, [page, pathname]);
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const delta = e.deltaY;
      if (delta > 0 && currentPage < 4) {
        console.log(currentPage);
        setCurrentPage(currentPage + 1);
      } else if (delta < 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        console.log(currentPage);
      }
    };
    const timeout = setTimeout(() => {
      window.addEventListener("wheel", handleScroll);
    }, 700);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, [currentPage]);
  const elements = [
    {
      name: "FIRST SLIDE",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1455325528055-ad815afecebe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
    {
      name: "SECOND SLIDE",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1565115868297-2e5de855ac7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
    {
      name: "THIRD SLIDE",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1526944247264-8a2788aab45b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
  ];
  return (
    <>
      <Contact />
      {category ? (
        Categories
      ) : (
        <>
          {elements.toReversed().map((element, index) => (
            <Slide
              index={index}
              length={elements.length}
              key={index}
              name={element.name}
              description={element.description}
              backgroundImage={element.backgroundImage}
              currentPage={currentPage}
            />
          ))}
          <Home currentPage={currentPage} />
        </>
      )}
    </>
  );
};

export default SlideList;
