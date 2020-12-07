import { EventBridgeHandler } from "aws-lambda";
import { IEvent } from "../../../../../../types/events/event";
import { updatePost } from "../../../platform/dynamodb/posts/update-post";

export const handler: EventBridgeHandler<
  "like-post:deleted",
  IEvent.Like.ILike,
  any
> = async (event) => {
  const like = event.detail;
  await updatePost(like.entityId, {
    likeCount: -1,
  });
};
