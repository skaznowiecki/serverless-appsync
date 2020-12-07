import { Functions } from "serverless/aws";
import { searchPosts } from "./search-posts/definition";
export const resolverFunctions: Functions = {
  searchPosts,
};
