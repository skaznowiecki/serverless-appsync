import { DynamoDBStreamHandler } from "aws-lambda";

import { createEvent } from "../../../../../../utils/events/create-event/index";
import { DynamoDB } from "aws-sdk";

import { IEvent } from "../../../../../../types/events/event";

export const handler: DynamoDBStreamHandler = async (event) => {
  const commentsCreated = [] as IEvent.Comment.IComment[];
  const commentsUpdated = [] as IEvent.Comment.IComment[];
  const commentsDeleted = [] as IEvent.Comment.IComment[];

  event.Records.forEach((record) => {
    if (record.eventName === "INSERT") {
      const comment = DynamoDB.Converter.unmarshall(
        record.dynamodb.NewImage
      ) as IEvent.Comment.IComment;
      commentsCreated.push(comment);
    } else if (record.eventName === "MODIFY") {
      const comment = DynamoDB.Converter.unmarshall(
        record.dynamodb.NewImage
      ) as IEvent.Comment.IComment;
      commentsUpdated.push(comment);
    } else {
      const comment = DynamoDB.Converter.unmarshall(
        record.dynamodb.OldImage
      ) as IEvent.Comment.IComment;
      commentsDeleted.push(comment);
    }
  });

  await Promise.all([
    createEvent<IEvent.Comment.IComment>(
      IEvent.Comment.Created,
      commentsCreated
    ),
    createEvent<IEvent.Comment.IComment>(
      IEvent.Comment.Updated,
      commentsUpdated
    ),
    createEvent<IEvent.Comment.IComment>(
      IEvent.Comment.Deleted,
      commentsDeleted
    ),
  ]);
};
