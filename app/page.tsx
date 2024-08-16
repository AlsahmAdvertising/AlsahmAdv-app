import Home from "@/components/Home";
import Slide from "@/components/Slide";
import elements from "@/helper/elements";
import React from "react";

const page = () => {
  return (
    <>
      {elements.reverse().map((element, index) => (
        <Slide
          index={index}
          length={elements.length}
          key={index}
          name={element.name}
          description={element.description}
          backgroundImage={element.backgroundImage}
          path={element.name}
        />
      ))}
      <Home />
    </>
  );
};

export default page;
