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

export const DELETE = async (request, { params }) => {
  await connect();
  const { id } = params;
  try {
    await Post.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Post deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  await connect();
  const { id } = params;
  const data = await request.json();

  console.log(data);
  try {
    await Post.findByIdAndUpdate(id, data);

    return NextResponse.json(
      { message: "Post updated successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
