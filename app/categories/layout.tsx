import CatNav from "@/components/CatNav";
import React from "react";

const layout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <section className="  flex items-end flex-col justify-center snap-start  w-full h-screen ">
      <CatNav />
      {children}
    </section>
  );
};

export default layout;
