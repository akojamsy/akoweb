"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

// async function getData() {
//   const res = await fetch("localhost:3000/api/posts");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const fetcher = (url) => fetch(url).then((r) => r.json());

const Blog = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/posts",
    fetcher
  );

  return (
    <div>
      <div>
        <div className='flex flex-col gap-12 mt-12 mb-24'>
          {data?.posts?.map((post) => (
            <Link
              href={`/blog/${post._id}`}
              className='flex flex-row gap-7 mb-[50px] items-center'
              key={post?._id}
            >
              <div className='relative w-[350px] h-[220px]'>
                <Image
                  fill={true}
                  src={post?.img}
                  alt=''
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col justify-center flex-1'>
                <h1 className='mb-2.5 font-semibold text-[28px]'>
                  {post?.title}
                </h1>
                <p className='text-lg text-[#999]'>{post?.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
