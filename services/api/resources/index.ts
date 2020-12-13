import { Resources } from "serverless/aws";
import { dynamoDBServiceRole } from "./dynamodb-role/definition";
import { lambdaServiceRole } from "./lambda-role/definition";

export const resources: Resources = {
  Resources: {
    ...lambdaServiceRole.Resources,
    ...dynamoDBServiceRole.Resources,
  },
  Outputs: {},
};
