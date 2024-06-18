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
      className={`page-section w-full z-10   absolute top-0 left-0  page-section ${
        currentPage >= length - index + 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      <div className="w-[100%] h-[100vh]  ">
        <div
          className={`${backgroundImage} h-full bg-cover overlay bg-center relative `}
        >
          <div className=" absolute top-[35%] max-w-[80%] left-[4%]  md:left-[10%] md:max-w-[65%] ">
            <h1 className="text-5xl drop-shadow-custom  text-white font-bold	pb-8 md:text-8xl sm:text-6xl md:pb-4	">
              {name}
            </h1>
            <p className="text-white pb-8 drop-shadow-custom font-semibold text-lg pl-3 md:text-2xl max-w-[85%] md:pb-4 md:text-bold">
              {description}
            </p>
            <button
              onClick={() => (window.location.href = path)}
              className="flex group items-center font-bold justify-end hover:border-white hover:border  text-[#04254bc0] hover:before:bg-gradient-to-r to-[#2574709c] from-[#14355c]  rounded-xl relative h-12 w-48 overflow-hidden border-[2.5px] border-[#04254bc0] bg-white px-3 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0  before:h-full before:w-0 before:bg-gradient-to-r before:transition-all before:duration-300 hover:text-white  hover:before:left-0 hover:before:w-[105%]"
            >
              <span className="relative ">MORE</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="  h-7 relative ml-9"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    className="stroke-myDarkBlue group-hover:stroke-white "
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
//
