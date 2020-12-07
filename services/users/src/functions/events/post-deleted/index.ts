import { EventBridgeHandler } from "aws-lambda";
import { PostDeletedEvent } from "../../../../../../types/events/posts/post-deleted";
import { updateUser } from "../../../platform/dynamodb/users/update-user/index";

export const handler: EventBridgeHandler<
  "post:deleted",
  PostDeletedEvent,
  any
> = async (event) => {
  const post = event.detail;
  await updateUser(post.owner, {
    postCount: -1,
  });
};
