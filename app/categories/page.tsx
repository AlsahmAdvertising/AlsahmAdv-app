"use client";

import React, { useEffect } from "react";
import contentArr from "@/utils/DB";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const hello = async function () {
    try {
      const res = await fetch("http://localhost:3000/api/posts");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="w-full flex items-center flex-col justify-center overflow-hidden h-[75%]">
      <div className="grid grid-cols-4 h-full gap-6 overflow-y-scroll p-6">
        {contentArr.map((ele, index) => {
          return (
            <Image
              key={index}
              src={ele.picture}
              alt="content"
              width={300}
              height={150}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
