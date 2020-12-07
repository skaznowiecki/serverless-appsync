import { postConfirmation } from "./post-confirmation/definition";
import { Functions } from "serverless/aws";

export const triggerFunctions: Functions = {
  "post-confirmation": postConfirmation,
};
