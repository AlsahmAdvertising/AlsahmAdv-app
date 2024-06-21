import React, { useState, useEffect } from "react";

const Slide = ({
  name,
  backgroundImage,
  description,
  length,
  index,
  currentPage,
  path,
}: {
  name: string;
  backgroundImage: string;
  description: string;
  length: number;
  index: number;
  currentPage: number;
  path: string;
}) => {
  return (
    <section
      className={`page-section w-full z-10 bg-secondary   absolute top-0 left-0  page-section ${
        currentPage >= length - index + 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      <div className="w-[100%] h-[100vh]  ">
        <div
          className={`${backgroundImage} h-full bg-cover overlay bg-center relative `}
        >
          <div className=" absolute top-[35%] max-w-[80%] left-[4%]  md:left-[10%] md:max-w-[65%] ">
            <h1 className="text-5xl drop-shadow-custom_black_center pl-1  text-white font-bold	pb-8 md:text-8xl sm:text-6xl md:pb-4	">
              {name}
            </h1>
            <p className="text-white pb-8 drop-shadow-custom_black_center font-semibold text-lg pl-1 md:text-2xl md:pb-4 md:text-bold">
              {description}
            </p>
            <button
              className="learn-more pl-1 "
              onClick={() => (window.location.href = path)}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow overflow-visible"></span>
              </span>
              <span className="button-text drop-shadow-custom_black_center hover:drop-shadow-none">
                Explore
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
//
