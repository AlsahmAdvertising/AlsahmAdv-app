"use client";

import { useEffect, useState } from "react";
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}
const Home = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const reportWin = () => {
    setWidth(window.innerWidth);
  };
  if (useIsClient()) window.onresize = reportWin;

  return (
    <section className="snap-start  w-full h-screen">
      {width > 560 ? (
        <div className="h-[100vh] overflow-hidden flex items-center justify-center relative -z-10 ">
          <iframe
            src="https://player.vimeo.com/video/939643388?autoplay=1&color=ff0179&title=0&byline=0&portrait=0&loop=1&controls=0&muted=1&quality=1080p"
            allow="autoplay"
            className="w-[300%] h-[129%] absolute"
          ></iframe>
          <h1 className="z-10 text-white  text-5xl font-bold">AlsahmAdv</h1>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh] overflow-hidden flex items-center justify-center relative -z-10">
          <iframe
            src="https://player.vimeo.com/video/939621491?autoplay=1&color=ff0179&title=0&byline=0&portrait=0&loop=1&controls=0&muted=1&quality=1080p"
            allow="autoplay"
            className="w-[140%] h-[105%] absolute"
          ></iframe>
          <h1 className="z-10 text-white  text-5xl font-bold">AlsahmAdv</h1>
        </div>
      )}
    </section>
  );
};

export default Home;
