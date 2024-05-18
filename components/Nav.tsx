import Link from "next/link";
{
}
const Nav = () => {
  return (
    <div className="fixed  w-full flex justify-between  text-white z-10 pr-4 pt-6 pl-4 gap-4 md:pt-10 md:px-12">
      <Link
        href="/"
        className="border-2 border-myDarkBlue bg-gradient-to-r to-mySeaBlue from-myDarkBlue  w-[33%] text-center py-2 rounded-2xl hover:shadow-2xl  hover:drop-shadow-custom_seaBlue hover:bg-secondary hover:scale-105  duration-150 sm:w-40 	"
      >
        Home
      </Link>
      <div className="flex justify-between w-[66%] gap-4 sm:w-[33%]  	">
        <Link
          href="/categories?category=Potato1"
          className="border-2 border-myDarkBlue bg-gradient-to-r to-mySeaBlue from-myDarkBlue  w-[50%] text-center py-2 rounded-2xl hover:shadow-2xl  hover:drop-shadow-custom_seaBlue hover:bg-secondary hover:scale-105  duration-150 	"
        >
          Categories
        </Link>
        <a
          href="#contact"
          className="border-2 border-myDarkBlue bg-gradient-to-r to-mySeaBlue from-myDarkBlue  w-[50%] text-center py-2 rounded-2xl hover:shadow-2xl  hover:drop-shadow-custom_seaBlue hover:bg-secondary hover:scale-105  duration-150 "
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Nav;
