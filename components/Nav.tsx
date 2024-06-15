"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import CatNav from "./CatNav";

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
      className={`  fixed  md:px-10  px-5  w-full flex justify-between   font-serif   z-[99999] ${
        categoryNav
          ? "text-[#879b92] drop-shadow-custom2"
          : "text-white  mt-5 md:py-8 drop-shadow-custom"
      } `}
    >
      <Link
        onClick={() => setPage(pathname)}
        href="/"
        className={`font-black 
      ${
        categoryNav
          ? "md:ml-8 md:mt-8  lg:ml-20 lg:mt-12 hover:scale-[0.97]  mt-6 bg-[#070808a2] hover:text-[#57a19b] font-black text-xl   md:text-3xl lg:text-5xl border-4 border-[#426356a2] px-3 py-1 rounded-2xl "
          : "hover:text-[#3e7099] text-xl sm:text-3xl md:text-5xl ld:text-6xl"
      }`}
      >
        Home
      </Link>

      <div className="flex md:font-black   gap-x-2 md:gap-x-8  	">
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
