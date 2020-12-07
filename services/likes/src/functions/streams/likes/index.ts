import { DynamoDBStreamHandler } from "aws-lambda";

import { createEvent } from "../../../../../../utils/events/create-event/index";

import { DynamoDB } from "aws-sdk";
import { IEvent } from "../../../../../../types/events/event";
import Like from "../../../types/entity/Like";

export const handler: DynamoDBStreamHandler = async (event) => {
  const likesCreated = [] as IEvent.Like.ILike[];
  const likesDeleted = [] as IEvent.Like.ILike[];

  event.Records.forEach((record) => {
    if (record.eventName === "INSERT") {
      const like = DynamoDB.Converter.unmarshall(
        record.dynamodb.NewImage
      ) as Like;
      likesCreated.push({
        entityId: like.id,
        entityName: like.entityName,
      });
    } else if (record.eventName === "REMOVE") {
      const like = DynamoDB.Converter.unmarshall(
        record.dynamodb.OldImage
      ) as Like;
      likesDeleted.push({
        entityId: like.id,
        entityName: like.entityName,
      });
    }
  });

  const createPostLikes = likesCreated.filter(
    (likeDeleted) => likeDeleted.entityName === "post"
  );
  const deletePostLikes = likesDeleted.filter(
    (likeDeleted) => likeDeleted.entityName === "post"
  );

  const createCommentLikes = likesCreated.filter(
    (likeDeleted) => likeDeleted.entityName === "comment"
  );
  const deleteCommentLikes = likesDeleted.filter(
    (likeDeleted) => likeDeleted.entityName === "comment"
  );

  await Promise.all([
    createEvent<IEvent.Like.ILike>(IEvent.Like.PostCreated, createPostLikes),
    createEvent<IEvent.Like.ILike>(IEvent.Like.PostDeleted, deletePostLikes),
    createEvent<IEvent.Like.ILike>(
      IEvent.Like.CommentCreated,
      createCommentLikes
    ),
    createEvent<IEvent.Like.ILike>(
      IEvent.Like.CommentDeleted,
      deleteCommentLikes
    ),
  ]);
};
