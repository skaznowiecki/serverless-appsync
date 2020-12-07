import { EventBridgeHandler } from "aws-lambda";
import { updatePost } from "../../../platform/dynamodb/posts/update-post";
import { IEvent } from "../../../../../../types/events/event";

export const handler: EventBridgeHandler<
  "comment:deleted",
  IEvent.Comment.IComment,
  any
> = async (event) => {
  const comment = event.detail;
  await updatePost(comment.postId, {
    commentCount: -1,
  });
};
