"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CatTabs = ({
  tab,
  selectedTab,
  setSelectedTab,
}: {
  tab: { name: string; arabic: string };
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();

  return (
    <>
      <button
        className={` md:w-44 w-24 m-3 drop-shadow-custom  hover:text-primary md:text-xl  font-black bg-clip-text text-white  `}
        onClick={() => {
          setSelectedTab(tab.name);
          router.push(`/categories?category=${tab.name}`);
        }}
      >
        {tab.arabic}
      </button>
    </>
  );
};

export default CatTabs;
{
}
