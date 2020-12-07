import { AwsIamFunction } from "../../../../../../utils/serverless/aws-iam-function";
import { dynamodbUsers } from "../../../resources/dynamodb-users/references";
import { UserCreatedEventName } from "../../../../../../types/events/users/user-created";
import configuration from "../../../../../../configuration";
export const userCreated: AwsIamFunction = {
  handler: "src/functions/events/user-created/index.handler",
  environment: {
    USERS_TABLE: dynamodbUsers.TableName,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [UserCreatedEventName],
        },
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:PutItem"],
      Resource: [dynamodbUsers.TableArn],
    },
  ],
};
