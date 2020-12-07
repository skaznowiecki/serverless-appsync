import { Resources } from "serverless/aws";
import { cognitoUserPool } from "./cognito-user-pool/definition";
import { cognitoPoolClient } from "./cognito-pool-client/definition";

export const resources: Resources = {
  Resources: {
    ...cognitoUserPool.Resources,
    ...cognitoPoolClient.Resources,
  },
  Outputs: {
    ...cognitoUserPool.Outputs,
    ...cognitoPoolClient.Outputs,
  },
};
