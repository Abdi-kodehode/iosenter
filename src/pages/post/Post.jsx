import React from "react";
import { CarouselPost } from "../../data/post/CarouselPost";

const Post = ({ match }) => {
  const postId = parseInt(match.params.id);
  const post = CarouselPost.find((p) => p.id === postId);
  const posts = CarouselPost

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <img src={posts.image} alt={post.title} />
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-600 mt-4">{post.blogPost}</p>
    </div>
  );
};

export default Post;
