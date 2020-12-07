import { dynamodbComments } from "../../../resources/dynamodb-comments/references";
import { AwsIamFunction } from "../../../../../../utils/serverless/aws-iam-function";
import configuration from "../../../../../../configuration";
import { IEvent } from "../../../../../../types/events/event";

export const likeCreated: AwsIamFunction = {
  handler: "src/functions/events/like-created/index.handler",
  environment: {
    COMMENTS_TABLE: dynamodbComments.TableName,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [IEvent.Like.CommentCreated],
        },
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:UpdateItem"],
      Resource: [dynamodbComments.TableArn],
    },
  ],
};
