import { NextResponse, NextRequest } from "next/server";
import connect from "@/dbConnetion/dbConnect";
import Post from "@/models/Post";

export const GET = async (request) => {
  await connect();
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    const posts = await Post.find(username && { username }).sort("-createdAt");

    return NextResponse.json({ posts, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: true }, { status: 500 });
  }
};

export const POST = async (request) => {
  await connect();

  const postBody = await request.json();

  console.log(postBody);

  try {
    const post = await new Post(postBody);
    await post.save();
    return NextResponse.json(
      { message: "Post created successfully", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
