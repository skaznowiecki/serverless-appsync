import { Resources } from "serverless/aws";
import { dynamodbUsersTable } from "./dynamodb-users/definition";

export const resources: Resources = {
  Resources: {
    ...dynamodbUsersTable.Resources,
  },
  Outputs: {
    ...dynamodbUsersTable.Outputs,
  },
};
