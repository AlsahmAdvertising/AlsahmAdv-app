import Slide from "./Slide";
const SlideList = () => {
  const elements = [
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
  return (
    <>
      {elements.map((element, index) => (
        <Slide
          key={index}
          name={element.name}
          description={element.description}
          backgroundImage={element.backgroundImage}
        />
      ))}
    </>
  );
};

export default SlideList;
