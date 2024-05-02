import CatNav from "@/components/CatNav";
import React from "react";

const layout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <section className=" w-full h-[100vh] flex items-end flex-col justify-center">
      <CatNav />
      {children}
    </section>
  );
};

export default layout;
