import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed  w-full flex justify-between text-white">
      <Link
        href="/"
        className="border-2 border-white bg-slate-800 h-10 w-20 text-center py-2"
      >
        Home
      </Link>
      <div className="flex justify-between w-64">
        <Link
          href="/categories?category=Potato1"
          className="border-2 border-white bg-slate-800 h-10 w-32 text-center py-2"
        >
          Categories
        </Link>
        <a
          href="#contact"
          className="border-2 border-white bg-slate-800 h-10 w-32 text-center py-2"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Nav;
