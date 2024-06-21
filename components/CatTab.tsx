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
        className={` md:w-44 w-24 m-3 drop-shadow-custom  hover:text-primary md:text-xl  font-black from-[#8b8f8d] to-[#adccce] bg-gradient-to-r bg-clip-text text-transparent  `}
        onClick={() => {
          setSelectedTab(tab.name);
          router.push(`/categories?category=${tab.name}`);
        }}
      >
        {tab.name}
      </button>
    </>
  );
};

export default CatTabs;
{
}
