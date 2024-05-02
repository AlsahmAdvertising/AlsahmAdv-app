import mongoose from "mongoose";
const { Schema } = mongoose;

const postsSchema = new Schema({
  title: String,
  description: String,
  image: String,
});
const Post = mongoose.model("Post", postsSchema);

export default mongoose.models.Post || Post;
