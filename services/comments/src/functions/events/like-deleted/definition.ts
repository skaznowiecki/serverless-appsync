import { dynamodbComments } from "../../../resources/dynamodb-comments/references";
import configuration from "../../../../../../configuration";
import { IEvent } from "../../../../../../types/events/event";
import { AwsIamFunction } from "../../../../../../types/serverless/aws-iam-function";

export const likeDeleted: AwsIamFunction = {
  handler: "src/functions/events/like-deleted/index.handler",
  environment: {
    COMMENTS_TABLE: dynamodbComments.TableName,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [IEvent.Like.CommentDeleted],
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
