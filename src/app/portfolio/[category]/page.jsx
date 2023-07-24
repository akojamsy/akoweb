import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <h1>{params.category}</h1>
      <div>
        <div className='flex flex-row gap-12 mt-12 mb-24 even:flex-row-reverse'>
          <div className='flex flex-col justify-center flex-1'>
            <h1>Test</h1>
            <p>Desc</p>
            <Button text={"See More"} url='#' />
          </div>
          <div className='relative w-full h-[500px] flex-1'>
            <Image
              fill={true}
              src='https://img.freepik.com/premium-photo/electric-circuitstyle-eye-makeup_579873-15884.jpg?w=740'
              alt=''
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
