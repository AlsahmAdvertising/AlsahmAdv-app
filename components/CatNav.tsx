"use client";
import React, { useRef, useState } from "react";
import navIcon from "../assets/navIcon.svg";
import CatTabs from "./CatTab";
import elements from "@/helper/elements";

export default function CatNav() {
  const tabs = elements.map((element) => {
    return { arabic: element.name, name: element.category };
  });

  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollingLeft, setScrollingLeft] = useState(0);

  if (itemRef.current?.scrollLeft === 0) itemRef.current?.scrollTo(3000, 0);

  return (
    <>
      <div className="flex drop-shadow-sm w-screen  mt-16 z-[10] overflow-visible   justify-center lg:mr-6 ">
        <div
          className="category items-centers bg-secondary w-[80%] sm:w-[70%]  lg:w-[50%] md:w-[60%] border-2 border-white shadow-primary_around"
          ref={itemRef}
          onMouseDown={(e) => {
            setIsMouseDown(true);

            setStartX(
              e.pageX - (itemRef.current?.getBoundingClientRect().left || 0)
            );
            setScrollingLeft(itemRef.current?.scrollLeft || 0);
          }}
          onMouseLeave={() => {
            setIsMouseDown(false);
          }}
          onMouseUp={() => {
            setIsMouseDown(false);
          }}
          onMouseMove={(e) => {
            if (!isMouseDown) return;

            itemRef.current?.scrollTo(3000, 0);

            e.preventDefault();
            const x =
              e.pageX - (itemRef.current?.getBoundingClientRect().left || 0);
            const walk = x - startX; //scroll-faster
            itemRef.current?.scrollLeft &&
              (itemRef.current.scrollLeft = scrollingLeft - walk);
          }}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="category-slide  flex justify-between ">
              {tabs.map((tab, tabIndex) => (
                <CatTabs
                  key={tabIndex}
                  tab={tab}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
