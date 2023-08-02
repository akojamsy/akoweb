"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import ImageUpload from "@/components/ImageUploader";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [img, setImg] = useState({ img: "" });
  const [edit, setEdit] = useState(false);

  const [input, setInput] = useState({
    title: "",
    description: "",
    content: "",
    img: "",
  });

  const [editData, setEditData] = useState(null);

  const { data, error, mutate, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, img, content } = input;
    if (!title || !description || !img || !content) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        }),
      }).then((response) => response.json());
      if (response.error) {
        toast.error(response.error);
        return;
      }
      toast.success(response.message);
      mutate();
      e.target.reset();
      setImg("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async () => {
    setIsSubmitting(true);
    const { title, description, img, content, _id } = input;
    try {
      const response = await fetch(`api/posts/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, img, content }),
      });
      setIsSubmitting(false);
      mutate();
      setInput({
        title: "",
        description: "",
        content: "",
        img: "",
      });
      setEdit(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      fetch(`/api/posts/${id}`, {
        method: "DELETE",
      }).then((response) => response.json());
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (session?.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const singlePost = (id) => {
    const postData = data?.posts?.filter((item) => item._id === id);
    setInput(postData[0]);
  };

  const setCustomerImg = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  if (session?.status === "authenticated") {
    return (
      <div className='flex gap-10 mt-10'>
        <div className='flex-1 overflow-y-scroll h-screen no-scrollbar'>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            data?.posts &&
            data?.posts?.map((post, i) => (
              <Link href={`api/posts/${post?._id}`} key={post?._id}>
                <div className='mb-10 hover:scale-105'>
                  <div className='relative md:w-3/4 h-44'>
                    <Image
                      src={post.img}
                      alt='post'
                      fill={true}
                      className='object-cover'
                    />
                  </div>
                  <div className=''>
                    <div className='md:w-3/4'>
                      <h2 className='font-semibold my-3'>{post?.title}</h2>
                      <p>{post?.description}</p>
                    </div>
                    <div className='flex gap-3'>
                      <button
                        className='text-primary'
                        onClick={() => {
                          setEdit(true);
                          singlePost(post._id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post?._id)}
                        className='text-red-500'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <form
          className='w-full md:flex-1 mt-10 flex flex-col gap-5'
          onSubmit={handleSubmit}
        >
          <h1>Add New Post</h1>
          <input
            type='text'
            name='title'
            value={input.title}
            onChange={handleChange}
            className='block w-full p-2  border bg-transparent border-gray-400  sm:text-md focus:rounded-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:border-0 focus:outline-none'
            placeholder='Enter title'
          />
          <input
            type='text'
            name='description'
            value={input.description}
            onChange={handleChange}
            className='block w-full p-2  border bg-transparent border-gray-400  sm:text-md focus:rounded-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:border-0 focus:outline-none'
            placeholder='Enter description'
          />

          <ImageUpload
            value={input.img}
            onChange={(value) => setCustomerImg("img", value)}
          />

          <textarea
            name='content'
            cols='30'
            rows='5'
            value={input.content}
            onChange={handleChange}
            placeholder='Enter content of post'
            className='block w-full p-2 border bg-transparent border-gray-400  sm:text-md focus:rounded-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:border-0 focus:outline-none'
          ></textarea>
          {edit ? (
            <button
              className='flex justify-center items-center w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br disabled:to-pink-600/50 '
              type='button'
              data-te-ripple-init
              data-te-ripple-color='light'
              disabled={isSubmitting}
              onClick={handleUpdate}
            >
              {isSubmitting && (
                <ClipLoader
                  color='#fff'
                  size={12}
                  speedMultiplier={0.8}
                  className='mr-2'
                />
              )}
              <span>Update</span>
            </button>
          ) : (
            <button
              className='flex justify-center items-center w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br disabled:to-pink-600/50 '
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
              <span>Submit</span>
            </button>
          )}
        </form>
      </div>
    );
  }
};

export default Dashboard;
