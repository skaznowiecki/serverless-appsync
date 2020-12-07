import { EventBridgeHandler } from "aws-lambda";
import { IEvent } from "../../../../../../types/events/event";
import { updateUser } from "../../../platform/dynamodb/users/update-user/index";

export const handler: EventBridgeHandler<
  "post:created",
  IEvent.Post.IPost,
  any
> = async (event) => {
  const post = event.detail;
  await updateUser(post.owner, {
    postCount: 1,
  });
};
