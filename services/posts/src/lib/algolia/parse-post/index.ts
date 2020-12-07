import AlgoliaPost from "../../../types/algolia-post";
import Post from "../../../types/entities/post";
export const parsePost = (post: AlgoliaPost): Post => {
  return {
    id: post.objectID,
    text: post.text,
    title: post.title,
    owner: post.owner,
    createdAt: post.createdAt,
  };
};
