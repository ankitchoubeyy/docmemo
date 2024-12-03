import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 items-center">
        <h2 className="text-xl sm:text-4xl md:8xl font-semibold">Docmemo</h2>
        </div>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get started <Image src={assets.arrow} alt=""></Image>
        </button>
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
