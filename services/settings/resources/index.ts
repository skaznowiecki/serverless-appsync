import { Resources } from "serverless/aws";

import { secretManagerPost } from "./secret-manager-posts/definition";

export const resources: Resources = {
  Resources: {
    ...secretManagerPost.Resources,
  },
  Outputs: {},
};
