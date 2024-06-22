"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import CatNav from "./CatNav";

const Nav = ({
  setContactPage,
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setContactPage: (state: boolean) => void;
}) => {
  const [categoryNav, setCategoryNav] = useState(false);
  const pathname = usePathname() ?? "";
  const [page, setPage] = useState(pathname);

  useEffect(() => {
    if (pathname.includes("categories")) {
      setCategoryNav(true);
    } else if (pathname === "/") {
      setCategoryNav(false);
    }
  }, [page, pathname]);

  return (
    <div
      className={`fixed my-4 pr-10 pl-8 w-full flex justify-between font-serif z-[999] text-white  `}
    >
      <Link
        onClick={() => {
          setCurrentPage(0);
          setPage(pathname);
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
              setContactPage(true);
            }}
            className=""
          >
            Our work
          </button>
        ) : (
          <Link
            onClick={() => setPage(pathname)}
            href="/categories?category=Potato1"
            className=" drop-shadow-custom"
          >
            Our work
          </Link>
        )}

        <button
          className=" drop-shadow-custom"
          onClick={() => setContactPage(false)}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Nav;
