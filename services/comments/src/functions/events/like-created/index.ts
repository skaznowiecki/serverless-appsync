import { EventBridgeHandler } from "aws-lambda";
import { IEvent } from "../../../../../../types/events/event";
import { updateComment } from "../../../platform/dynamodb/comments/update-comment/index";

export const handler: EventBridgeHandler<
  "like-comment:created",
  IEvent.Like.ILike,
  any
> = async (event) => {
  const like = event.detail;

  await updateComment(like.entityId, {
    likeCount: 1,
  });
};
