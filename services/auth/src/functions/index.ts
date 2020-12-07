import { triggerFunctions } from "./triggers/index";
import { Functions } from "serverless/aws";
export const functions: Functions = {
  ...triggerFunctions,
};
