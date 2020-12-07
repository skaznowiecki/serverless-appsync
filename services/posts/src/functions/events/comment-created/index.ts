import { EventBridgeHandler } from "aws-lambda";
import { IEvent } from "../../../../../../types/events/event";
import { updatePost } from "../../../platform/dynamodb/posts/update-post";

export const handler: EventBridgeHandler<
  "comment:created",
  IEvent.Comment.IComment,
  any
> = async (event) => {
  const comment = event.detail;
  await updatePost(comment.postId, {
    commentCount: 1,
  });
};
