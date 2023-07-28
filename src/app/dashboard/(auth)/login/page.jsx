"use client";
import React, { useEffect } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import { signIn } from "next-auth/react";

const Login = () => {
  useEffect(() => {
    initTE({ Input, Ripple });
  }, []);

  return (
    <div className='mx-auto'>
      <button
        className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br '
        type='button'
        data-te-ripple-init
        data-te-ripple-color='light'
        onClick={() => signIn("google")}
      >
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
