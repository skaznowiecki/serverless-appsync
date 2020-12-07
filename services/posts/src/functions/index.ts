import { Functions } from "serverless/aws";
import { eventFunctions } from "./events";
import { streamFunctions } from "./streams/index";
import { resolverFunctions } from "./resolvers/index";

export const functions: Functions = {
  ...streamFunctions,
  ...eventFunctions,
  ...resolverFunctions,
};
