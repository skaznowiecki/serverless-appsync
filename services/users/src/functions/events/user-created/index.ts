import { EventBridgeHandler } from "aws-lambda";
import { UserCreatedEvent } from "../../../../../../types/events/users/user-created";
import { createUser } from "../../../platform/dynamodb/users/create-user/index";

export const handler: EventBridgeHandler<
  "user:created",
  UserCreatedEvent,
  any
> = async (event) => {
  const { id, email, phone } = event.detail;
  await createUser(id, email, phone);
};
