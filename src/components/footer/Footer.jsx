"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='flex flex-row justify-between items-center h-[60px]'>
      <span>&copy; 2023, Akoweb. All rights reserved</span>
      <div className='flex flex-row gap-3'>
        <Link href='/'>
          <Image
            src='/images/facebook.png'
            width={15}
            height={15}
            alt='facebook-icon'
          />
        </Link>
        <Image
          src='/images/twitter.png'
          width={15}
          height={15}
          alt='twitter-icon'
        />
        <Image
          src='/images/thread.png'
          width={15}
          height={15}
          alt='thread-icon'
        />
        <Image
          src='/images/instagram.png'
          width={15}
          height={15}
          alt='instagram-icon'
        />
      </div>
    </div>
  );
};

export default Footer;
