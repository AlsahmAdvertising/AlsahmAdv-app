"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import CatNav from "./CatNav";
const Categories = ({ isCategories }: { isCategories: boolean }) => {
  const [post, setPost] = useState<
    {
      image: string;
      title: string;
      description: string;
      _id: string;
    }[]
  >();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

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
      className={`flex items-end flex-col justify-center bg-[#0e1618] h-screen page-section w-full  z-10  absolute top-0 left-0  page-section  ${
        !isCategories ? "-translate-y-[100%]" : ""
      }`}
    >
      <CatNav />
      <div className="w-full relative  flex flex-col items-center overflow-hidden my-2 rounded-3xl -mt-6  -mb-14 h-[85%]">
        <div className=" flex relative w-[85%] flex-col bg-[#061011bd] h-[100%]  items-center border-4 border-[#030607a2] drop-shadow-catCategories my-8  rounded-3xl  md:gap-10  ">
          <div className="grid gap-5 pt-5 grid-cols-1 md:px-8  min-w-[350px] w-full my-8  md:gap-10 pb-32 overflow-y-scroll lg:grid-cols-3 p-6 md:grid-cols-2 ">
            {post &&
              post.map((ele, index) => {
                return (
                  <Image
                    key={index}
                    src={ele.image}
                    alt="content"
                    width={400}
                    height={230}
                    className="rounded-xl fade-in drop-shadow-custom mx-auto w-[350px] h-[200px] lg:w-[420px] lg:h-[240px] object-center"
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
