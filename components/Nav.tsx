"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import useStore from "@/app/state/store";
import elements from "@/helper/elements";

const Nav = () => {
  const pathname = usePathname() ?? "";

  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setIsCategories = useStore((state) => state.setIsCategories);

  return (
    <div
      className={`fixed my-4 pr-10 pl-8 w-full flex justify-between font-serif z-[999] text-white  `}
    >
      <Link
        onClick={() => {
          setCurrentPage(0);
        }}
        href="/"
        className={`font-black 
      ${" drop-shadow-custom text-xl   "}`}
      >
        شعار
      </Link>

      <div className="flex justify-center items-center font-black drop-shadow-custom   gap-x-8  	">
        {pathname.includes("categories") ? (
          <button
            onClick={() => {
              setCurrentPage(0);
              setIsCategories(true);
            }}
            className=""
          >
            اعمالنا
          </button>
        ) : (
          <Link
            onClick={() => {
              setIsCategories(true);
            }}
            href="/categories"
            className=" drop-shadow-custom"
          >
            اعمالنا
          </Link>
        )}

        <button
          className=" drop-shadow-custom"
          onClick={() => {
            setIsCategories(false);

            setCurrentPage(elements.length + 1);
          }}
        >
          تواصل معنا
        </button>
      </div>
    </div>
  );
};

export default Nav;
