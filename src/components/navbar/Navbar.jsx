"use client";
import Link from "next/link";
import React from "react";
import links from "@/components/navbar/data.json";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = () => {
  return (
    <div className='flex flow-row justify-between items-center h-[80px]'>
      <Link href={"/"} className='font-bold text-xl text-[#cc429e]'>
        Akoweb
      </Link>
      <div className='flex flex-row gap-7 items-center'>
        <DarkModeToggle />
        {links?.map(({ id, link, title }, i) => (
          <Link
            key={id}
            href={link}
            className='hover:text-[#cc429e] transition duration-300'
          >
            {title}
          </Link>
        ))}
        {/* <button className='bg-[#970a68] hover:bg-[#b40f7d] hover:text-white px-2 py-1 rounded-md cursor-pointer transition duration-300'>
          Logout
        </button> */}
        <button
          type='button'
          className='w-1/3 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
