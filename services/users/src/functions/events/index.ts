import { Functions } from "serverless/aws";
import { userCreated } from "./user-created/definition";
import { postCreated } from "./post-created/definition";
import { postDeleted } from "./post-deleted/definition";

export const eventFunctions: Functions = {
  "user-created": userCreated,
  "post-created": postCreated,
  "post-deleted": postDeleted,
};
