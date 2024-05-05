"use client";
const toCategories: () => void = () => {
  console.log("It Works");
};
const Slide = ({
  name,
  backgroundImage,
  description,
}: {
  name: string;
  backgroundImage: string;
  description: string;
}) => {
  return (
    <section className="snap-start w-full h-screen">
      <div className="w-[100%] h-[100vh] ">
        <div className={`${backgroundImage} h-full bg-cover relative -z-10`}>
          <div className="absolute top-[35%] left-[60%] ">
            <h1 className="text-white  ">{name}</h1>
            <p className="text-white ">{description}</p>
            <button
              onClick={toCategories}
              className="bg-transparent hover:bg-orange-400 text- font-semibold hover:text-white py-2 px-10 border border-orange-700 hover:border-transparent rounded border-"
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
