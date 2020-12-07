import { dynamodbLikes } from "../../../resources/dynamodb-likes/references";
import { eventBus } from "../../../../../../utils/events/exports/event-bus";
export const likesStream: any = {
  handler: "src/functions/streams/likes/index.handler",
  environment: {
    POSTS_TABLE: dynamodbLikes.TableName,
  },
  events: [
    {
      stream: {
        type: "dynamodb",
        arn: dynamodbLikes.StreamArn,
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
