import { AwsIamFunction } from "../../../../../../utils/serverless/aws-iam-function";
import { eventBus } from "../../../../../../utils/events/exports/event-bus";
import { cognitoUserPoolAuth } from "../../../resources/cognito-user-pool/references";

export const postConfirmation: AwsIamFunction = {
  handler: "src/functions/triggers/post-confirmation/index.handler",
  events: [
    {
      cognitoUserPool: {
        pool: cognitoUserPoolAuth.Name,
        trigger: "PostConfirmation",
        existing: true,
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [eventBus.Role()],
};
