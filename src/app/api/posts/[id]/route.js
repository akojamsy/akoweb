import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/dbConnetion/dbConnect";

export const GET = async (request, { params }) => {
  await connect();
  const { id } = params;
  try {
    const post = await Post.findById(id);
    console.log(post);
    return NextResponse.json({ post, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
