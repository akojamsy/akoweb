import Image from "next/image";
import React from "react";

const BlogPost = () => {
  return (
    <div className=''>
      <div className='flex flex-col-reverse md:flex-row '>
        <div className='flex-1 flex flex-col gap-y-7'>
          <h1 className='text-[42px] font-semibold leading-tight'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className='text-sm md:text-[17px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ab
            nisi eaque eveniet! Blanditiis corporis at magni vitae ad rerum ab
            quod, vero minus dignissimos voluptatum minima quam odio assumenda
            recusandae eligendi optio quibusdam inventore! Soluta minus nisi
            corporis?
          </p>
          <div className='flex items-center gap-3'>
            <div className='relative w-10 h-10 rounded-full bg-gray-400'>
              <Image
                fill={true}
                src='/images/avatar.jpg'
                className='rounded-full object-cover'
              />
            </div>
            <h3 className='text-md font-semibold'>John Doe</h3>
          </div>
        </div>
        <div className='flex-1'>
          <div className='relative w-full h-[250px]'>
            <Image fill={true} src='/images/contact.png' alt='post' />
          </div>
        </div>
      </div>
      <p className='mt-7 '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eius
        ipsam obcaecati? Ab odit, architecto sunt quam maxime explicabo illum
        ratione harum, eos unde quidem nihil dolore, quibusdam dolorum
        voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quam, atque nihil. Doloremque quibusdam accusantium totam? Eveniet omnis
        ab debitis nemo esse. Iste ullam fugiat fugit obcaecati exercitationem
        cumque totam soluta quisquam numquam, debitis animi enim adipisci
        veritatis excepturi quo expedita cupiditate beatae reiciendis, sit
        corporis provident aliquid eius qui veniam! Voluptatibus eum consequatur
        beatae praesentium commodi saepe alias sapiente a! Facilis nihil quia
        ullam officiis illum ad? Nulla vero porro esse! Nostrum laudantium
        dolores deleniti aperiam optio quaerat fugiat delectus!
      </p>
    </div>
  );
};

export default BlogPost;
