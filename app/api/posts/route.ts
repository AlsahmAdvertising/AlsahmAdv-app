import { NextResponse } from "next/server";
import connectToDB from "@/utils/database";
import Post from "@/models/posts";
export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const category = searchParams.get("category") || "";
  try {
    await connectToDB();
    console.log("10");
    const post = await Post.find({ category: category });
    console.log("12");

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
// const arr = [];
// for (let i = 0; i < 25; i++) {
//   arr.push(
//     new Post({
//       category: `Potato4`,
//       title: `Potato${i + 1}`,
//       description: `description${i + 1}`,
//       image:
//         "https://images.unsplash.com/photo-1640815650317-2783fe67da07?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     })
//   );
// }
// arr.forEach(async (ele) => {
//   await ele.save();
// });
