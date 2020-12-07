import { Functions } from "serverless/aws";
import { streamFunctions } from "./streams/index";
import { eventFunctions } from "./events/index";

export const functions: Functions = {
  ...streamFunctions,
  ...eventFunctions,
};
