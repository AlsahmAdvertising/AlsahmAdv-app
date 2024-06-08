import React, { useState, useEffect } from "react";

const ScrollSlideshow = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const percentage = (currentScroll / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define your content (slides) here
  const slides = [
    {
      name: "FIRST SLIDE",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1455325528055-ad815afecebe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
    {
      name: "SECOND SLIDE",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1565115868297-2e5de855ac7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
    {
      name: "THIRD SLIDE",
      description:
        " rocks and minerals that have been worn down by constant pounding by wind and waves",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1526944247264-8a2788aab45b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
  ];

  // Determine the active slide based on scroll position
  const activeSlideIndex = Math.floor(
    (slides.length - 1) * (scrollPercentage / 100)
  );
  console.log(activeSlideIndex);
  return (
    <div className="scroll-slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === activeSlideIndex ? "active" : ""}`}
        >
          <div className={`${slide.backgroundImage} h-full bg-cover relative `}>
            <div className="absolute top-[35%] max-w-[80%] left-[4%] pr-2 md:left-[10%] md:max-w-[60%] ">
              <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r to-myLightblue from-myDarkBlue font-bold	pb-8 sm:text-8xl md:pb-4	">
                {slide.name}
              </h1>
              <p className="text-myDarkBlue pb-8 font-semibold text-lg pl-3 md:text-2xl max-w-[85%] md:pb-4 md:text-bold">
                {slide.description}
              </p>
              <button className="flex group items-center justify-end text-myLto-myLightblue bg-white hover:before:bg-gradient-to-r to-myLightblue from-myDarkBlue rounded-2xl relative h-[60px] w-40 overflow-hidden border border-myDarkBlue bg-primary px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:transition-all before:duration-500 hover:text-white hover:drop-shadow-custom_seaBlue hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Swipe</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-10  h-7 relative ml-8"
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
      ))}
    </div>
  );
};

export default ScrollSlideshow;
