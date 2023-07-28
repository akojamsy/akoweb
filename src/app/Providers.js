"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Providers;
