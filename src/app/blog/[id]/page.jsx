import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// generates metadata for seo
export async function generateImageMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const data = await getData(params.id);

  return (
    <div className=''>
      <div className='flex flex-col-reverse md:flex-row '>
        <div className='flex-1 flex flex-col gap-y-7'>
          <h1 className='text-[42px] font-semibold leading-tight'>
            {data?.post?.title}
          </h1>
          <p className='text-sm md:text-[17px]'>{data?.post?.description}</p>
          <div className='flex items-center gap-3'>
            <div className='relative w-10 h-10 rounded-full bg-gray-400'>
              <Image
                fill={true}
                src='/images/avatar.jpg'
                className='rounded-full object-cover'
              />
            </div>
            <h3 className='text-md font-semibold'>{data?.post?.username}</h3>
          </div>
        </div>
        <div className='flex-1'>
          <div className='relative w-full h-[250px]'>
            <Image fill={true} src={data?.post?.img} alt='post' />
          </div>
        </div>
      </div>
      <p className='mt-7 '>{data?.post?.content}</p>
    </div>
  );
}
