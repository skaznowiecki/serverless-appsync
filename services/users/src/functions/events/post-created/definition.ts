import { AwsIamFunction } from "../../../../../../utils/serverless/aws-iam-function";
import { dynamodbUsers } from "../../../resources/dynamodb-users/references";
import configuration from "../../../../../../configuration";
import { IEvent } from "../../../../../../types/events/event";

export const postCreated: AwsIamFunction = {
  handler: "src/functions/events/post-created/index.handler",
  environment: {
    USERS_TABLE: dynamodbUsers.TableName,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [IEvent.Post.Created],
        },
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:UpdateItem"],
      Resource: [dynamodbUsers.TableArn],
    },
  ],
};
