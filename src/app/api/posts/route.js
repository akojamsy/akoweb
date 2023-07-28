import { NextResponse, NextRequest } from "next/server";
import connect from "@/dbConnetion/dbConnect";
import Post from "@/models/Post";

export const GET = async (request) => {
  await connect();
  try {
    const posts = await Post.find();

    return NextResponse.json({ posts, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: true }, { status: 500 });
  }
};
