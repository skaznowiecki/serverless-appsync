import { Functions } from "serverless/aws";
import { streamFunctions } from "./streams/index";

export const functions: Functions = {
  ...streamFunctions,
};
