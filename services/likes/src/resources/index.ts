import { Resources } from "serverless/aws";
import { dynamodbLikesTable } from "./dynamodb-likes/definition";

export const resources: Resources = {
  Resources: {
    ...dynamodbLikesTable.Resources,
  },
  Outputs: {
    ...dynamodbLikesTable.Outputs,
  },
};
