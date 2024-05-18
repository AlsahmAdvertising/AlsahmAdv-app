import mongoose from "mongoose";
const { Schema } = mongoose;

const postsSchema = new Schema({
  category: String,
  publicID: String,
  image: String,
});
const Post = mongoose.models.Post || mongoose.model("Post", postsSchema);

export default Post;
