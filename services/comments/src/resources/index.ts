import { Resources } from "serverless/aws";
import { dynamodbCommentsTable } from "./dynamodb-comments/definition";

export const resources: Resources = {
  Resources: {
    ...dynamodbCommentsTable.Resources,
  },
  Outputs: {
    ...dynamodbCommentsTable.Outputs,
  },
};
