import configuration from "../../../../../../configuration";
import { dynamodbPosts } from "../../../resources/dynamodb-posts/references";
import { IEvent } from "../../../../../../types/events/event";
import { AwsIamFunction } from "../../../../../../types/serverless/aws-iam-function";

export const likeDeleted: AwsIamFunction = {
  handler: "src/functions/events/like-deleted/index.handler",
  environment: {
    POSTS_TABLE: dynamodbPosts.TableName,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [IEvent.Like.PostDeleted],
        },
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:UpdateItem"],
      Resource: [dynamodbPosts.TableArn],
    },
  ],
};
