import { NextResponse } from "next/server";
import connectToDB from "@/utils/database";
import Post from "@/models/posts";
export const GET = async () => {
  try {
    await connectToDB();
    const post = await Post.find({});
    console.log(post);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
