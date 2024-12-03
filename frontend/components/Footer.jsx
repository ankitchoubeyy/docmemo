import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-around flex-col gap-3 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      
      <p className="text-sm text-gray-300">
        All right reserved. Copyright @Docmemo
      </p>
      <div className="flex gap-2">
        <Image src={assets.facebook_icon} alt="" width={40} />
        <Image src={assets.twitter_icon} alt="" width={40} />
        <Image src={assets.googleplus_icon} alt="" width={40} />
      </div>
    </div>
  );
}

export default Footer;
