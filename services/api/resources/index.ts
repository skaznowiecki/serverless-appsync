import { Resources } from "serverless/aws";
import { dynamoDBServiceRole } from "./dynamodb-service-role";
import { lambdaServiceRole } from "./lambda-service-role";

export const resources: Resources = {
  Resources: {
    ...lambdaServiceRole.Resources,
    ...dynamoDBServiceRole.Resources,
  },
  Outputs: {},
};
