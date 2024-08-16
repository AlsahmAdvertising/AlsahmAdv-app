"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import CatNav from "@/components/CatNav";
import useStore from "../state/store";
import elements from "@/helper/elements";
const Categories = () => {
  const isCategories = useStore((state) => state.isCategories);
  const setIsCategories = useStore((state) => state.setIsCategories);

  const [post, setPost] = useState<
    {
      image: string;
      title: string;
      description: string;
      _id: string;
    }[]
  >();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || elements[0].name;
  console.log(category);

  useEffect(() => {
    const hello = async function () {
      try {
        const res = await fetch(`/api/posts?category=${category}`);
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    hello();
  }, [category]);

  return (
    <section
      className={`flex items-end flex-col justify-center overlay bg-secondary h-screen page-section w-full  z-10  absolute top-0 left-0  page-section  ${
        !isCategories ? "-translate-y-[100%]" : ""
      }`}
    >
      <CatNav />
      <div className="w-full relative  flex flex-col items-center overflow-hidden rounded-3xl h-[85%]">
        <div className="    overflow-hidden flex relative w-[85%] flex-col bg-secondary shadow-primary_inside drop-shadow-custom_black_center h-[100%]  items-center  my-6 md:gap-10  ">
          <span className="absolute overflow-visible block animate-slider1 top-0 left-[-100%] w-full h-[2px] bg-white"></span>
          <span className="absolute block animate-slider2 right-0 top-[-100%] w-[2px] h-full bg-white"></span>
          <span className="absolute block animate-slider3 bottom-0 right-[-100%] w-full h-[2px] bg-white"></span>
          <span className="absolute block animate-slider4 left-0 bottom-[-100%] h-full w-[2px] bg-white"></span>
          <div className="min-w-[350px] justify-around w-full mt-8 pb-32 overflow-y-scroll px-[2%] flex flex-wrap">
            {post &&
              post.map((ele, index) => {
                const modifiedUrl = ele.image.split("/");
                const windowWidth = window.innerWidth;
                const oneItem = Math.floor(windowWidth * 0.85 * 0.96 * 0.96);
                const twoItems = Math.floor(
                  (windowWidth * 0.85 * 0.96 * 0.92) / 2
                );
                const threeItems = Math.floor(
                  (windowWidth * 0.85 * 0.96 * 0.88) / 3
                );
                const width =
                  windowWidth >= 1280
                    ? threeItems
                    : windowWidth >= 640
                    ? twoItems
                    : oneItem;

                modifiedUrl.splice(
                  7,
                  0,
                  `c_scale,w_${width}`,
                  "f_auto",
                  "q_auto"
                );

                return (
                  <Image
                    key={index}
                    // priority={true}
                    // fetchPriority="high"
                    src={modifiedUrl.join("/")}
                    alt="content"
                    width={640}
                    height={360}
                    className="rounded-xl p-[2%] fade-in drop-shadow-custom w-full sm:w-1/2 xl:w-1/3"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
