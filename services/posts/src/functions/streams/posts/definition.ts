import { dynamodbPosts } from "../../../resources/dynamodb-posts/references";
import { eventBus } from "../../../../../../utils/events/exports/event-bus";
export const postsStream: any = {
  handler: "src/functions/streams/posts/index.handler",
  environment: {
    POSTS_TABLE: dynamodbPosts.TableName,
  },
  events: [
    {
      stream: {
        type: "dynamodb",
        arn: dynamodbPosts.StreamArn,
        batchWindow: 1,
        batchSize: 10,
        startingPosition: "LATEST",
        enabled: true,
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [eventBus.Role()],
};
