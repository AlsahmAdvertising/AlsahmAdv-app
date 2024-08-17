"use client";

import useStore from "@/app/state/store";
import elements from "@/helper/elements";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Slide = ({
  name,
  backgroundImage,
  description,
  length,
  index,
  path,
}: {
  name: string;
  backgroundImage: string;
  description: string;
  length: number;
  index: number;
  path: string;
}) => {
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setIsCategories = useStore((state) => state.setIsCategories);

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
  }, [currentPage, setIsCategories, setCurrentPage]);

  return (
    <section
      className={`page-section w-full z-10 bg-secondary   absolute top-0 left-0  page-section ${
        currentPage >= length - index + 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      <div className="w-[100%] h-[100vh]  ">
        <div
          className={`${backgroundImage} h-full bg-cover overlay bg-center relative `}
        >
          <div className=" absolute top-[35%] max-w-[80%] right-[4%]    md:right-[10%] md:max-w-[65%] ">
            <h1 className="text-5xl drop-shadow-custom_black_center pl-1  text-right text-white font-bold	pb-8 md:text-8xl sm:text-6xl md:pb-4	">
              {name}
            </h1>
            <p className="text-white pb-8 drop-shadow-custom_black_center text-right  font-semibold text-lg  md:text-2xl md:pb-4 md:text-bold">
              {description}
            </p>
            <div className="w-full flex justify-end">
              <Link
                className="learn-more pl-1 w-full  rotate-180"
                onClick={() => {
                  setIsCategories(true);
                }}
                href={`/categories?category=${path}`}
                // onClick={() => {
                //   setCurrentPage(0);
                //   setIsCategories(true);
                //   window.location.href = `/categories?category=${path}`;
                // }}
              >
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow overflow-visible"></span>
                </span>
                <span className="button-text rotate-180 drop-shadow-custom_black_center hover:drop-shadow-none duration-0">
                  استكشف
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
//
