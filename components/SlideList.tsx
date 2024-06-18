"use client";
import Slide from "./Slide";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Home from "./Home";
import Contact from "./Contact";
import Nav from "./Nav";
import Categories from "./Categories";
import Progress from "./Progress";
const SlideList = ({ OldCategories }: { OldCategories: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pathname = usePathname() ?? "";
  const [isCategories, setIsCategories] = useState(true);
  const [page, setPage] = useState(pathname);
  const [category, setCategory] = useState(false);

  const setContactPage = (state: boolean) => {
    setCurrentPage(elements.length + 1);
    setIsCategories(state);
  };

  const elements = [
    {
      name: "Category 1",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1647675975434-864e1c3fc98d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
      path: "/categories?category=Potato1",
    },
    {
      name: "Category 2",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
      path: "/categories?category=Potato2",
    },
    {
      name: "Category 3",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
      path: "/categories?category=Potato3",
    },
  ];

  useEffect(() => {
    if (pathname === "/categories") {
      setCategory(true);
    } else if (pathname === "/") {
      setCategory(false);
    }
  }, [page, pathname]);

  useEffect(() => {
    let start: number;
    let end: number;
    const handleStart = (e: TouchEvent) => {
      const touchMove = e.touches[0];
      start = touchMove.clientY;
    };
    const handleEnd = (e: TouchEvent) => {
      const touchMove = e.changedTouches[0];
      end = touchMove.clientY;
      if (start - end > 0 && currentPage < elements.length + 1) {
        setCurrentPage(currentPage + 1);
      } else if (start - end < 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        setIsCategories(true);
      }
    };
    const timeoutID = setTimeout(() => {
      window.addEventListener("touchstart", handleStart);
      window.addEventListener("touchend", handleEnd);
    }, 300);

    const handleScroll = (e: WheelEvent) => {
      const delta = e.deltaY;
      if (delta > 0 && currentPage < elements.length + 1) {
        setCurrentPage(currentPage + 1);
      } else if (delta < 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        setIsCategories(true);
      }
    };
    const timeout = setTimeout(() => {
      window.addEventListener("wheel", handleScroll);
    }, 700);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchend", handleEnd);
      clearTimeout(timeoutID);
    };
  }, [currentPage, elements.length]);

  useEffect(() => {}, [currentPage]);

  console.log(currentPage);
  return (
    <main>
      <Nav setContactPage={setContactPage} setCurrentPage={setCurrentPage} />
      <Progress currentPage={currentPage} />

      <Contact />

      {category ? (
        <Categories isCategories={isCategories} />
      ) : (
        <>
          {elements.reverse().map((element, index) => (
            <Slide
              index={index}
              length={elements.length}
              key={index}
              name={element.name}
              description={element.description}
              backgroundImage={element.backgroundImage}
              currentPage={currentPage}
              path={element.path}
            />
          ))}
          <Home currentPage={currentPage} />
        </>
      )}
    </main>
  );
};

export default SlideList;
