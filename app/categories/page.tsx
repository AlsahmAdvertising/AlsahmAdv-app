"use client";

import React, { useEffect, useState } from "react";
import contentArr from "@/utils/DB";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const Page = () => {
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
    <div className="w-full flex items-center flex-col justify-center overflow-hidden h-[75%]">
      <div className="grid gap-10 grid-cols-1 h-full md:gap-10 lg:gap-16 overflow-y-scroll p-6 md:grid-cols-2 lg:grid-cols-3">
        {post &&
          post.map((ele, index) => {
            return (
              <Image
                key={index}
                src={ele.image}
                alt="content"
                width={450}
                height={200}
                className="rounded-md  mx-auto h-auto shadow-none transition-shadow duration-600 cursor-pointer hover:shadow-2xl hover:shadow-gray-800 hover:rounded-2xl hover:scale-105"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Page;
