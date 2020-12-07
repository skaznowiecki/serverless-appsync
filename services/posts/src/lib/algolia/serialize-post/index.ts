import AlgoliaPost from "../../../types/algolia-post";
import Post from "../../../types/entities/post";
export const serializePost = (post: Post): AlgoliaPost => {
  return {
    objectID: post.id,
    text: post.text,
    title: post.title,
    owner: post.owner,
    createdAt: post.createdAt,
  };
};
