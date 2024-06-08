"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [categoryNav, setCategoryNav] = useState(false);
  const pathname = usePathname() ?? "";
  const [page, setPage] = useState(pathname);

  useEffect(() => {
    if (pathname === "/categories") {
      setCategoryNav(true);
    } else if (pathname === "/") {
      setCategoryNav(false);
    }
  }, [page, pathname]);

  return (
    <div
      className={`fixed md:my-8 md:px-10 my-3 px-5  w-full flex justify-between   font-serif  z-10
      ${categoryNav ? " text-black" : "  text-white"} `}
    >
      <Link
        onClick={() => setPage(pathname)}
        href="/"
        className="font-black text-xl sm:text-3xl hover:text-slate-400  md:text-6xl"
      >
        Home
      </Link>

      <div className="flex md:font-black text-base sm:text-lg mt-1 gap-x-2 md:gap-x-8 md:text-3xl 	">
        {!categoryNav && (
          <Link
            onClick={() => setPage(pathname)}
            href="/categories?category=Potato1"
            className=" hover:text-slate-400  	"
          >
            Categories
          </Link>
        )}
        <a href="#contact" className=" hover:text-slate-400   ">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Nav;
