import { Outputs } from "serverless/aws";
import { searchPostsOutputs } from "./search-posts/definition";
export const resolverOutputs: Outputs = {
  ...searchPostsOutputs,
};
