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
      console.log(email, password);
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
        data-te-ripple-init
        data-te-ripple-color='light'
        onClick={() => signIn("google")}
      >
        Log in with Google
      </button>
      <div className='block md:mx-auto max-w-md rounded-lg !bg-white  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:!bg-transparent'>
        <form onSubmit={handleSubmit}>
          <div className='relative mb-6' data-te-input-wrapper-init>
            <input
              type='email'
              name='email'
              className='peer block min-h-[auto] w-full rounded border-0 border-pink-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id='email'
              placeholder='Email address'
            />
            <label
              htmlFor='email'
              className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-pink  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-neutral-500'
            >
              Email address
            </label>
          </div>

          <div className='relative mb-6' data-te-input-wrapper-init>
            <input
              type='password'
              className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id='exampleInput126'
              placeholder='Password'
            />
            <label
              htmlFor='exampleInput126'
              className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-pinkborder-pink-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-neutral-500'
            >
              Password
            </label>
          </div>

          <button
            className='mb-3 flex justify-center items-center w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br disabled:to-pink-600/50 '
            type='submit'
            data-te-ripple-init
            data-te-ripple-color='light'
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
            Don't have an account?
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
