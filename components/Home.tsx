"use client";

import useStore from "@/app/state/store";
import elements from "@/helper/elements";
import { useEffect, useState } from "react";
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

const Home = () => {
  const [width, setWidth] = useState(useIsClient() ? window?.innerWidth : 0);
  const [height, setHeight] = useState(useIsClient() ? window?.innerHeight : 0);
  const client = useIsClient();
  const desktop = width > 490;

  useEffect(() => {
    if (client) {
      reportWin();
    }
  }, [client]);

  const reportWin = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  if (useIsClient()) window.onresize = reportWin;

  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const setIsCategories = useStore((state) => state.setIsCategories);

  useEffect(() => {
    let start: number;
    let end: number;
    const handleStart = (e: TouchEvent) => {
      const touchMove = e.touches[0];
      start = touchMove.clientY;
    };
    const handleEnd = (e: TouchEvent) => {
      const touchMove = e.changedTouches[0];
      end = touchMove.clientY;
      if (start - end > 0 && currentPage < elements.length + 1) {
        setCurrentPage(currentPage + 1);
      } else if (start - end < 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        setIsCategories(true);
      }
    };
    const timeoutID = setTimeout(() => {
      window.addEventListener("touchstart", handleStart);
      window.addEventListener("touchend", handleEnd);
    }, 300);

    const handleScroll = (e: WheelEvent) => {
      const delta = e.deltaY;
      if (delta > 0 && currentPage < elements.length + 1) {
        setCurrentPage(currentPage + 1);
      } else if (delta < 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
        setIsCategories(true);
      }
    };
    const timeout = setTimeout(() => {
      window.addEventListener("wheel", handleScroll);
    }, 700);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchend", handleEnd);
      clearTimeout(timeoutID);
    };
  }, [currentPage, setIsCategories, setCurrentPage]);

  return (
    <section
      className={`bg-secondary z-50 page-section w-full h-full flex items-center justify-center overflow-hidden absolute top-0 left-0  page-section ${
        currentPage >= 1 ? "-translate-y-[100%]" : ""
      }`}
    >
      <iframe
        title="Home Video"
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

      <h1 className="text-white z-10 h-full w-full flex justify-center items-center text-5xl font-bold select-none">
        Alsahm Advertisement
      </h1>
    </section>
  );
};

export default Home;
