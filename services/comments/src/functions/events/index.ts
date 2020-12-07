import { Functions } from "serverless/aws";

import { likeCreated } from "./like-created/definition";
import { likeDeleted } from "./like-deleted/definition";
export const eventFunctions: Functions = {
  "like-created": likeCreated,
  "like-deleted": likeDeleted,
};
