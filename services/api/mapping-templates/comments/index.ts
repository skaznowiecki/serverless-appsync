import { owner } from "./owner/definition";
import { createComment } from "./create-comment/definition";
import { post } from "./post/definition";
import { likes } from "./likes/definition";
import { liked } from "./liked/definition";
import { deleteComment } from "./delete-comment/definition";

export const commentsMapping = [
  post,
  createComment,
  owner,
  likes,
  liked,
  deleteComment,
];
