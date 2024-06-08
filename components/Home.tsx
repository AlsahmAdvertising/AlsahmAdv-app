"use client";

import { useEffect, useState } from "react";
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}
const Home = ({ currentPage }: { currentPage: number }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const reportWin = () => {
    setWidth(window.innerWidth);
  };
  if (useIsClient()) window.onresize = reportWin;

  return (
    <section
      className={`bg-black z-50 page-section w-full overflow-hidden absolute top-0 left-0  page-section ${
        currentPage >= 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      {width > 560 ? (
        <div className="h-[100vh] overflow-hidden flex items-center justify-center relative  ">
          <iframe
            src="https://player.vimeo.com/video/939643388?autoplay=1&color=ff0179&title=0&byline=0&portrait=0&loop=1&controls=0&muted=1&quality=1080p"
            allow="autoplay"
            className="w-[300%] h-[129%] absolute"
          ></iframe>
          <div className="flex items-center justify-center z-10 w-full h-screen">
            <h1 className=" text-white  text-5xl font-bold select-none">
              AlsahmAdv
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh]  flex items-center justify-center relative ">
          <iframe
            src="https://player.vimeo.com/video/939621491?autoplay=1&color=ff0179&title=0&byline=0&portrait=0&loop=1&controls=0&muted=1&quality=1080p"
            allow="autoplay"
            className="w-[140%] h-[105%] absolute"
          ></iframe>
          <div className="flex items-center justify-center w-full h-screen  z-10">
            <h1 className=" text-white  text-5xl font-bold select-none">
              AlsahmAdv
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
