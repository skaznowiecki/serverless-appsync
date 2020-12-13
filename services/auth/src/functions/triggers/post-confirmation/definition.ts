import { eventBus } from "../../../../../../utils/events/exports/event-bus";
import { cognitoUserPoolAuth } from "../../../resources/cognito-user-pool/references";
import { AwsIamFunction } from "../../../../../../types/serverless/aws-iam-function";

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
