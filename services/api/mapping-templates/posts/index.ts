import { listPosts } from "./list-posts/definition";
import { createPost } from "./create-post/definition";
import { owner } from "./owner/definition";
import { comments } from "./comments/definition";
import { getPost } from "./get-post/definition";
import { likes } from "./likes/definition";
import { liked } from "./liked/definition";
import { deletePost } from "./delete-post/definition";
import { updatePost } from "./update-post/definition";
import { searchPosts } from "./search-posts/definition";

export const postsMapping = [
  listPosts,
  createPost,
  owner,
  comments,
  getPost,
  likes,
  liked,
  deletePost,
  updatePost,
  searchPosts,
];
