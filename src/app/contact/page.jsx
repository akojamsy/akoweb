import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className='text-center text-[50px] mb-10'>Let's keep in Touch</h1>
      <div className='flex flex-row items-center gap-24'>
        <div className='relative w-full h-[500px] flex-1'>
          <Image
            src='/images/contact.png'
            fill={true}
            alt='contact-us'
            className='object-contain animate-move'
          />
        </div>
        <form className='flex-1 flex flex-col gap-5'>
          <input
            type='text'
            placeholder='name'
            className='p-2 text-neutral-300 bg-transparent border-2 border-neutral-400 rounded-md'
          />
          <input
            type='email'
            placeholder='email'
            className='p-2 text-neutral-300 bg-transparent border-2 border-neutral-400 rounded-md'
          />
          <textarea
            name='message'
            id='message'
            cols='10'
            rows='5'
            placeholder='message'
            className='p-2 text-neutral-300 bg-transparent border-2 border-neutral-400 rounded-md'
          ></textarea>
          <Button url='#' text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
