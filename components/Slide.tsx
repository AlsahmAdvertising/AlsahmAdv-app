import React, { useState, useEffect } from "react";

const Slide = ({
  name,
  backgroundImage,
  description,
  length,
  index,
  currentPage,
}: {
  name: string;
  backgroundImage: string;
  description: string;
  length: number;
  index: number;
  currentPage: number;
}) => {
  return (
    <section
      className={`page-section w-full  absolute top-0 left-0  page-section ${
        currentPage >= length - index + 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      <div className="w-[100%] h-[100vh] ">
        <div className={`${backgroundImage} h-full bg-cover relative `}>
          <div className="absolute top-[35%] max-w-[80%] left-[4%] pr-2 md:left-[10%] md:max-w-[60%] ">
            <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r to-myLightblue from-myDarkBlue font-bold	pb-8 sm:text-8xl md:pb-4	">
              {name}
            </h1>
            <p className="text-myDarkBlue pb-8 font-semibold text-lg pl-3 md:text-2xl max-w-[85%] md:pb-4 md:text-bold">
              {description}
            </p>
            <button className="flex group items-center justify-end text-myLto-myLightblue bg-white hover:before:bg-gradient-to-r to-myLightblue from-myDarkBlue rounded-2xl relative h-[60px] w-40 overflow-hidden border border-myDarkBlue bg-primary px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0  before:h-full before:w-0 before:bg-gradient-to-r before:transition-all before:duration-500 hover:text-white hover:drop-shadow-custom_seaBlue hover:before:left-0 hover:before:w-full">
              <span className="relative ">Swipe</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="  h-7 relative ml-8"
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
