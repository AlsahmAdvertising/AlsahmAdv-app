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
      className={`fixed pt-4 md:pt-2 md:px-10 px-5 w-full flex justify-between font-serif z-[999] ${"text-white md:py-8 drop-shadow-custom"} `}
    >
      <Link
        onClick={() => {
          setCurrentPage(0);
          setPage(pathname);
        }}
        href="/"
        className={`font-black 
      ${"hover:text-primary text-xl sm:text-3xl md:text-5xl ld:text-6xl"}`}
      >
        Home
      </Link>

      <div className="flex justify-center items-center md:font-black   gap-x-2 md:gap-x-8  	">
        {pathname.includes("categories") ? (
          <button
            onClick={() => {
              setCurrentPage(0);
              setContactPage(true);
            }}
            className="hover:text-primary"
          >
            Categories
          </button>
        ) : (
          <Link
            onClick={() => setPage(pathname)}
            href="/categories?category=Potato1"
            className="hover:text-primary"
          >
            Categories
          </Link>
        )}

        <button
          className="hover:text-primary"
          onClick={() => setContactPage(false)}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Nav;
