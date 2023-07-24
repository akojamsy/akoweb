import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col gap-12 mt-12 mb-24'>
          <Link
            href='/blog/postId'
            className='flex flex-row gap-7 mb-[50px] items-center'
          >
            <div className='relative w-[350px] h-[220px]'>
              <Image
                fill={true}
                src='https://img.freepik.com/premium-photo/electric-circuitstyle-eye-makeup_579873-15884.jpg?w=740'
                alt=''
                className='object-cover'
              />
            </div>
            <div className='flex flex-col justify-center flex-1'>
              <h1 className='mb-2.5 font-semibold text-[28px]'>Test</h1>
              <p className='text-lg text-[#999]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora perspiciatis obcaecati vitae voluptatem rem ea nihil
                ratione atque suscipit eos.
              </p>
            </div>
          </Link>
          <Link
            href='/blog/postId'
            className='flex flex-row gap-7 mb-[50px] items-center'
          >
            <div className='relative w-[350px] h-[220px]'>
              <Image
                fill={true}
                src='https://img.freepik.com/premium-photo/electric-circuitstyle-eye-makeup_579873-15884.jpg?w=740'
                alt=''
                className='object-cover'
              />
            </div>
            <div className='flex flex-col justify-center flex-1'>
              <h1 className='mb-2.5 font-semibold text-[28px]'>Test</h1>
              <p className='text-lg text-[#999]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora perspiciatis obcaecati vitae voluptatem rem ea nihil
                ratione atque suscipit eos.
              </p>
            </div>
          </Link>
          <Link
            href='/blog/postId'
            className='flex flex-row gap-7 mb-[50px] items-center'
          >
            <div className='relative w-[350px] h-[220px]'>
              <Image
                fill={true}
                src='https://img.freepik.com/premium-photo/electric-circuitstyle-eye-makeup_579873-15884.jpg?w=740'
                alt=''
                className='object-cover'
              />
            </div>
            <div className='flex flex-col justify-center flex-1'>
              <h1 className='mb-2.5 font-semibold text-[28px]'>Test</h1>
              <p className='text-lg text-[#999]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora perspiciatis obcaecati vitae voluptatem rem ea nihil
                ratione atque suscipit eos.
              </p>
            </div>
          </Link>
          <Link
            href='/blog/postId'
            className='flex flex-row gap-7 mb-[50px] items-center'
          >
            <div className='relative w-[350px] h-[220px]'>
              <Image
                fill={true}
                src='https://img.freepik.com/premium-photo/electric-circuitstyle-eye-makeup_579873-15884.jpg?w=740'
                alt=''
                className='object-cover'
              />
            </div>
            <div className='flex flex-col justify-center flex-1'>
              <h1 className='mb-2.5 font-semibold text-[28px]'>Test</h1>
              <p className='text-lg text-[#999]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora perspiciatis obcaecati vitae voluptatem rem ea nihil
                ratione atque suscipit eos.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
