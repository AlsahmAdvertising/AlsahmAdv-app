"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CatTabs = ({
  tab,
  selectedTab,
  setSelectedTab,
}: {
  tab: { name: string; icon: string };
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();

  return (
    <>
      <button
        className={` flex items-center  text-white justify-center flex-col`}
        onClick={() => {
          setSelectedTab(tab.name);
          router.push(`/categories?category=${tab.name}`);
        }}
      >
        <div className="relative group w-16 h-16 flex items-center justify-center p-4 border-2 border-white rounded-full">
          <div
            className={`absolute group-hover:visible ${
              selectedTab === tab.name ? "visible" : "invisible"
            }`}
          >
            {tab.name}
          </div>

          <Image
            src={tab.icon}
            width={30}
            height={30}
            alt="icons"
            className={`absolute group-hover:invisible ${
              selectedTab === tab.name ? "invisible" : "visible"
            }`}
          />
        </div>
      </button>
    </>
  );
};

export default CatTabs;
