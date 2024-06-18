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
  const [height, setHeight] = useState(0);
  const desktop = width > 490;

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  const reportWin = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  if (useIsClient()) window.onresize = reportWin;
  console.log("resized");

  return (
    <section
      className={`bg-black z-50 page-section w-full h-full flex items-center justify-center overflow-hidden absolute top-0 left-0  page-section ${
        currentPage >= 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      <iframe
        src={
          desktop
            ? "https://player.vimeo.com/video/939643388?autoplay=1&color=ff0179&title=0&byline=0&portrait=0&loop=1&controls=0&muted=1&quality=1080p"
            : "https://player.vimeo.com/video/939621491?autoplay=1&color=ff0179&title=0&byline=0&portrait=0&loop=1&controls=0&muted=1&quality=1080p"
        }
        allow="autoplay"
        className={`absolute ${
          desktop
            ? width / height >= 1.77777777778
              ? "w-full aspect-video"
              : "h-full aspect-video"
            : width / height >= 0.5625
            ? "w-full aspect-mobile"
            : "h-full aspect-mobile"
        }`}
      ></iframe>

      <h1 className="text-white z-10 text-5xl font-bold select-none">
        AlsahmAdv
      </h1>
    </section>
  );
};

export default Home;
