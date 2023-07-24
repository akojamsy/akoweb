import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1 className='my-5 font-semibold text-[28px]'>Choose a gallery</h1>
      <div className='flex gap-12'>
        <Link
          href='/portfolio/illustrations'
          className="border-4 rounded-sm w-[300px] h-[400px] relative bg-[url('/images/illustration.jpeg')] bg-cover"
        >
          <span className='absolute right-2.5 bottom-2.5 text-[40px] font-semibold'>
            Illustrations
          </span>
        </Link>
        <Link
          href='/portfolio/websites'
          className="border-4 rounded-sm w-[300px] h-[400px] relative bg-cover bg-[url('/images/websites.jpg')]"
        >
          <span className='absolute right-2.5 bottom-2.5 text-[40px] font-semibold'>
            Websites
          </span>
        </Link>
        <Link
          href='/portfolio/application'
          className="border-4 rounded-sm w-[300px] h-[400px] relative bg-[url('/images/application.jpg')] bg-cover"
        >
          <span className='absolute right-2.5 bottom-2.5 text-[40px] font-semibold'>
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
