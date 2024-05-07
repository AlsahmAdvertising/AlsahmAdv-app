import Link from "next/link";
{
}
const Nav = () => {
  return (
    <div className="fixed  w-full flex justify-between text-white z-10 pr-4 pt-6 pl-4 ">
      <Link
        href="/"
        className="border-2 border-myDarkBlue bg-gradient-to-r to-mySeaBlue from-myDarkBlue h-10 w-32 text-center py-2 rounded-2xl hover:shadow-2xl  hover:shadow-mySeaBlue hover:bg-secondary hover:scale-105 hover:w-34 duration-150 	"
      >
        Home
      </Link>
      <div className="flex justify-between w-64 gap-4  	">
        <Link
          href="/categories?category=Potato1"
          className="border-2 border-myDarkBlue bg-gradient-to-r to-mySeaBlue from-myDarkBlue h-15 w-40 text-center py-2 rounded-2xl hover:shadow-2xl  hover:shadow-mySeaBlue hover:bg-secondary hover:scale-105 hover:w-44 duration-150	"
        >
          Categories
        </Link>
        <a
          href="#contact"
          className="border-2 border-myDarkBlue bg-gradient-to-r to-mySeaBlue from-myDarkBlue h-15 w-40 text-center py-2 rounded-2xl hover:shadow-2xl  hover:shadow-mySeaBlue hover:bg-secondary hover:scale-105 hover:w-44 duration-150"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Nav;
