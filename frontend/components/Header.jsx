import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl sm:text-4xl md:8xl font-semibold">Docmemo</h2>
        </div>
        <Link href="/addblog">
        <button className="bg-[#ffffff] text-black font-medium py-1 px-3 sm:py-3 sm:px-6 hover:text-white hover:bg-black transition-all duration-500 border border-solid border-black rounded  hover:shadow-none">
          Get started
        </button>
        </Link>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-2xl font-medium sm:text-5xl">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Stay Ahead with the Latest Insights : Explore Our Fresh Blogs Now!
        </p>
      </div>
    </div>
  );
}

export default Header;
