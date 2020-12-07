import { dynamodbComments } from "../../../resources/dynamodb-comments/references";
import { eventBus } from "../../../../../../utils/events/exports/event-bus";
export const commentsStream: any = {
  handler: "src/functions/streams/comments/index.handler",
  environment: {
    COMMENTS_TABLE: dynamodbComments.TableName,
  },
  events: [
    {
      stream: {
        type: "dynamodb",
        arn: dynamodbComments.StreamArn,
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
