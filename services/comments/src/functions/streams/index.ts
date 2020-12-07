import { Functions } from "serverless/aws";
import { commentsStream } from "./comments/definition";
export const streamFunctions: Functions = {
  "comments-stream": commentsStream,
};
