import Image from "next/image";
import React from "react";
import AboutImage from "/public/images/about.jpg";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className='mb-5'>
      <div className='relative w-[100%]'>
        <Image
          src={AboutImage}
          alt='about'
          className='h-[250px] object-cover filter grayscale'
        />
        <div className='absolute bottom-5 left-5 bg-[#cc429e] p-1 text-[#fff] leading-tight'>
          <h1 className=''>Digital Storytellers</h1>
          <h2>Hardcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className='flex flex-row gap-x-24 mt-5'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[28px]'>Who Are We?</h1>
          <p className='text-[14px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            ab veritatis eum sequi esse totam recusandae ipsam voluptates non,
            repellendus quibusdam quidem molestiae rem amet accusantium
            inventore maxime!
            <br /> <br />
            Laudantium facilis modi provident quos aliquid, maiores repudiandae
            minus dolor veritatis vel tempore eligendi nobis unde voluptate est
            quibusdam odit pariatur neque!
          </p>
        </div>
        <div>
          <h1 className='font-bold text-[28px]'>What We Do?</h1>
          <p className='text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            consequatur laudantium corporis, voluptatem cumque iste dolor
            expedita, id consequuntur! Magnam, a quam.
            <br /> <br />
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            nostrum!
            <br /> <br />
            -Lorem ipsum dolor sit amet consectetur adip
            <br /> <br />
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            nostrum!
            <br />
            <br />
          </p>
          <Button url={""} text={"contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
