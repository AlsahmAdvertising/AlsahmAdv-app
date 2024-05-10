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
        className={` flex items-center  text-white justify-center flex-col  ${
          selectedTab === tab.name
            ? "underline font-semibold text-gray-50 "
            : ""
        }`}
        onClick={() => {
          setSelectedTab(tab.name);
          router.push(`/categories?category=${tab.name}`);
        }}
      >
        <Image src={tab.icon} width={30} height={30} alt="icons" className="" />
        {tab.name}
      </button>
    </>
  );
};

export default CatTabs;
