import { Functions } from "serverless/aws";
import { postCreated } from "./post-created/definition";
import { algoliaPostsQueued } from "./algolia-posts-queued/definition";
import { postDeleted } from "./post-deleted/definition";
import { commentDeleted } from "./comment-deleted/definition";
import { commentCreated } from "./comment-created/definition";
import { likeCreated } from "./like-created/definition";
import { likeDeleted } from "./like-deleted/definition";
export const eventFunctions: Functions = {
  "post-created": postCreated,
  "post-deleted": postDeleted,

  "comment-created": commentCreated,
  "comment-deleted": commentDeleted,

  "like-created": likeCreated,
  "like-deleted": likeDeleted,

  "algolia-posts-queued": algoliaPostsQueued,
};
