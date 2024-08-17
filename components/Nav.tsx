"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import useStore from "@/app/state/store";
import elements from "@/helper/elements";

const Nav = () => {
  const pathname = usePathname() ?? "";

  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setIsCategories = useStore((state) => state.setIsCategories);
  const setLoading = useStore((state) => state.setLoading);
  const loading = useStore((state) => state.loading);

  return (
    <div
      className={`fixed my-4 px-4 sm:px-10 w-full flex justify-between font-serif z-[999] text-white  `}
    >
      <Link
        onClick={() => {
          setCurrentPage(0);
          setLoading(false);
        }}
        href="/"
        className={`font-black 
      ${" drop-shadow-custom text-xl   "}`}
      >
        شعار
      </Link>

      <div className="flex justify-center text-center items-center font-black drop-shadow-custom   gap-x-8  	">
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
        ) : loading ? (
          <h1>...</h1>
        ) : (
          <Link
            onClick={() => {
              setIsCategories(true);
              setLoading(true);
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
