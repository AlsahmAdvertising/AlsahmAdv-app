import Slide from "./Slide";
const SlideList = () => {
  const elements = [
    {
      name: "slide1",
      description: "Card",
      backgroundImage:
        "bg-[url('https://i.ibb.co/dpxVrRB/john-schnobrich-Fl-Pc9-Voc-J4-unsplash.jpg')]",
    },
    {
      name: "slide2",
      description: "slide 2",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1548357186-1e652e4e21da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    },
    {
      name: "slide3",
      description: "printer",
      backgroundImage:
        "bg-[url('https://images.unsplash.com/photo-1710857679450-ecd7945dd4bd?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
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
