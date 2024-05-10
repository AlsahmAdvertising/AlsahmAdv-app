"use client";

import CatTabs from "./CatTab";
import navIcon from "../assets/navIcon.svg";
import { useState } from "react";

const tabs = [
  { name: "Potato1", icon: navIcon },
  { name: "Potato2", icon: navIcon },
  { name: "Potato3", icon: navIcon },
  { name: "Potato4", icon: navIcon },
];

const CatNav = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);

  return (
    <section className="w-[100%] flex   pt-16 pb-4 md:px-[10%]">
      <div className="w-full flex items-center bg-gradient-to-tl to to-mySeaBlue from-myDarkBlue justify-evenly gap-6   border-2 border-myDarkBlue  md:rounded-full">
        {tabs.map((tab, index) => {
          return (
            <CatTabs
              key={index}
              tab={tab}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CatNav;
