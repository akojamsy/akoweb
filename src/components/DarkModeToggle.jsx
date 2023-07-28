"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className='flex justify-between items-center p-0.5 border-[1px] border-pink-600 rounded-2xl relative gap-2 cursor-pointer'
      onClick={handleToggle}
    >
      <div className='text-[12px]'>🌙</div>
      <div className='text-[12px]'>🔅</div>
      <div
        className={`absolute w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 transition-all duration-300  ${
          theme === "dark" ? "" : "right-0.5 "
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
