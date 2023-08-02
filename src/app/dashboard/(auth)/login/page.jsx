"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setIsSubmitting(true);
      await signIn("credentials", { email, password });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='mx-auto'>
      <button
        className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]  dark:text-neutral-500 dark:hover:text-neutral-400
         '
        type='button'
        onClick={() => signIn("google")}
      >
        Log in with Google
      </button>
      <div className='block md:mx-auto max-w-md rounded-lg !bg-white  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:!bg-transparent'>
        <form onSubmit={handleSubmit}>
          <div className='relative mb-6'>
            <input
              type='email'
              name='email'
              className='block w-full p-2  border bg-transparent border-gray-400  sm:text-md focus:rounded-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:border-0 focus:outline-none'
              placeholder='Email'
            />
          </div>

          <div className='relative mb-6' data-te-input-wrapper-init>
            <input
              type='password'
              name='password'
              className='block w-full p-2  border bg-transparent border-gray-400  sm:text-md focus:rounded-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:border-0 focus:outline-none'
              placeholder='Password'
            />
          </div>

          <button
            className='mb-3 flex justify-center items-center w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br disabled:to-pink-600/50 '
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <ClipLoader
                color='#fff'
                size={12}
                speedMultiplier={0.8}
                className='mr-2'
              />
            )}
            <span>Login</span>
          </button>
          <p className='text-white text-[12px] dark:text-neutral-500'>
            Don&apos;t have an account?
            <Link
              href='/dashboard/register'
              className='ml-2 hover:underline hover:underline-offset-2 text-pink-400 font-semibold'
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
