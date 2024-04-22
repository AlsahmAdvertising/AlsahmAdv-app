const Slide = ({ element }: { element: any }) => {
  return (
    <section id="do not touch">
      <div className="w-[80vw] h-[80vh] border-2 border-black">
        <div>{element} slide</div>
      </div>
    </section>
  );
};

export default Slide;
