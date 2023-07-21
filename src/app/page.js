import Image from "next/image";
import Hero from "/public/images/hero.png";

export default function Home() {
  return (
    <>
      {/* // <main className='flex min-h-screen flex-col items-center justify-between p-24'> */}
      {/* if you are using external domain make sure to add the domain to next/config */}
      {/* <Image
        src='https://images.unsplash.com/photo-1509973980596-41027d8325f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        alt=''
        width={500}
        height={500}
      /> */}

      {/* </main> */}
      <div
        className='flex
      '
      >
        <div className='flex-1 flex flex-col gap-y-10'>
          <h1 className='text-[72px] bg-clip-text text-transparent bg-gradient-to-b from-[#cc429e] to-gray-400 leading-tight font-semibold '>
            Excellent design for your digital products.
          </h1>
          <p className='text-[24px] font-light'>
            Turning your idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <button
            type='button'
            class='w-1/3 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            See Our Works
          </button>
        </div>
        <div className='w-[100%] h-[500px] flex flex-1 justify-center '>
          <Image
            src={Hero}
            alt='hero'
            className='w-[80%] h-[500px] object-cover'
          />
        </div>
      </div>
    </>
  );
}
