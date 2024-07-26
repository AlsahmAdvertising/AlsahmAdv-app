"use client";
import Slide from "./Slide";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Home from "./Home";
import Contact from "./Contact";
import Nav from "./Nav";
import Progress from "./Progress";
import useStore from "@/app/state/store";
const SlideList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pathname = usePathname() ?? "";
  const isCategories = useStore((state) => state.isCategories);
  const setIsCategories = useStore((state) => state.setIsCategories);
  const [page, setPage] = useState(pathname);
  const [category, setCategory] = useState(false);

  useEffect(() => {
    if (pathname === "/categories") {
      setCategory(true);
    } else if (pathname === "/") {
      setCategory(false);
    }
  }, [page, pathname]);

  return null;
};

export default SlideList;
