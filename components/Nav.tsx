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
      ${" drop-shadow-custom text-xl sm:text-3xl md:text-5xl ld:text-6xl"}`}
      >
        Home
      </Link>

      <div className="flex justify-center items-center md:font-black drop-shadow-custom  gap-x-2 md:gap-x-8  	">
        {pathname.includes("categories") ? (
          <button
            onClick={() => {
              setCurrentPage(0);
              setIsCategories(true);
            }}
            className=""
          >
            Our work
          </button>
        ) : (
          <Link
            onClick={() => {
              setIsCategories(true);
            }}
            href="/categories"
            className=" drop-shadow-custom"
          >
            Our work
          </Link>
        )}

        <button
          className=" drop-shadow-custom"
          onClick={() => {
            setIsCategories(false);

            setCurrentPage(elements.length + 1);
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Nav;
