import { Functions } from "serverless/aws";
import { eventFunctions } from "./events/index";

export const functions: Functions = {
  ...eventFunctions,
};
