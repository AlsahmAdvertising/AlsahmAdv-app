"use client";
import SlideList from "@/components/SlideList";
import Home from "@/components/Home";
import { useEffect, useState } from "react";
import Test from "@/components/test";
import ScrollSlideshow from "@/components/slideshow";

const Page = () => {
  const slideArr = ["]", "", "translate-y-[100%]"];
  let index = 0;

  return (
    <main className=" w-full h-screen relative ">
      <SlideList />
    </main>
  );
};

export default Page;
