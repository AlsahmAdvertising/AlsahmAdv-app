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
    <div className="w-full flex items-center justify-evenly gap-6  h-[9%] border-2 border-black rounded-full">
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
  );
};

export default CatNav;
