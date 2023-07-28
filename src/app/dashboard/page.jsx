"use client";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Dashboard = () => {
  const session = useSession();
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(session);
  return <div>Dashboard</div>;
};

export default Dashboard;
