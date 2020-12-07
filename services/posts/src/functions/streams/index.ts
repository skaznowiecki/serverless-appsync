import { Functions } from "serverless/aws";
import { postsStream } from "./posts/definition";
export const streamFunctions: Functions = {
  "posts-stream": postsStream,
};
