"use client";
import React, { useRef, useState } from "react";
import navIcon from "../assets/navIcon.svg";
import CatTabs from "./CatTab";

export default function CatNav() {
  const tabs = [
    { name: "Potato1", icon: navIcon },
    { name: "Potato2", icon: navIcon },
    { name: "Potato3", icon: navIcon },
    { name: "Potato4", icon: navIcon },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollingLeft, setScrollingLeft] = useState(0);

  if (itemRef.current?.scrollLeft === 0) itemRef.current?.scrollTo(3000, 0);

  return (
    <>
      <div className="flex drop-shadow-sm  w-screen  mt-9 z-[999]  justify-center lg:mr-6 ">
        <div
          className="category  items-centers w-[60%] lg:w-[50%]  "
          ref={itemRef}
          onMouseDown={(e) => {
            setIsMouseDown(true);

            setStartX(
              e.pageX - (itemRef.current?.getBoundingClientRect().left || 0)
            );
            setScrollingLeft(itemRef.current?.scrollLeft || 0);
            console.log(
              e.pageX - (itemRef.current?.getBoundingClientRect().left || 0),
              "scrollingLeft"
            );
          }}
          onMouseLeave={() => {
            setIsMouseDown(false);
            console.log("leave");
          }}
          onMouseUp={() => {
            setIsMouseDown(false);
            console.log("up");
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
            console.log(walk, "walk");
            console.log(itemRef.current?.scrollLeft, "x");
          }}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="category-slide  flex justify-between">
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
