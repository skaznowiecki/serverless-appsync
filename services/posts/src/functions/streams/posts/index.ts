import { DynamoDBStreamHandler } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import { IEvent } from "../../../../../../types/events/event";
import { createEvent } from "../../../../../../utils/events/create-event/index";

export const handler: DynamoDBStreamHandler = async (event) => {
  const postsCreated = [] as IEvent.Post.IPost[];
  const postsUpdated = [] as IEvent.Post.IPost[];
  const postsDeleted = [] as IEvent.Post.IPost[];

  event.Records.forEach((record) => {
    if (record.eventName === "INSERT") {
      const post = DynamoDB.Converter.unmarshall(
        record.dynamodb.NewImage
      ) as IEvent.Post.IPost;
      postsCreated.push(post);
    } else if (record.eventName === "MODIFY") {
      const post = DynamoDB.Converter.unmarshall(
        record.dynamodb.NewImage
      ) as IEvent.Post.IPost;
      postsUpdated.push(post);
    } else {
      const post = DynamoDB.Converter.unmarshall(
        record.dynamodb.OldImage
      ) as IEvent.Post.IPost;
      postsDeleted.push(post);
    }
  });

  await Promise.all([
    createEvent<IEvent.Post.IPost>(IEvent.Post.Created, postsCreated),
    createEvent<IEvent.Post.IPost>(IEvent.Post.Updated, postsUpdated),
    createEvent<IEvent.Post.IPost>(IEvent.Post.Deleted, postsDeleted),
  ]);
};
