import { Functions } from "serverless/aws";
import { likesStream } from "./likes/definition";
export const streamFunctions: Functions = {
  "likes-stream": likesStream,
};
