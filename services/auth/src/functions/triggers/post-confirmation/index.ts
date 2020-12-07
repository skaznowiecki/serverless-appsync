import { createEvent } from "../../../../../../utils/events/create-event/index";

import { IEvent } from "../../../../../../types/events/event";
import {
  PostConfirmationTriggerEvent,
  PostConfirmationTriggerHandler,
} from "aws-lambda";

export const handler: PostConfirmationTriggerHandler = async (
  event: PostConfirmationTriggerEvent
): Promise<PostConfirmationTriggerEvent> => {
  const userAttributes = event.request.userAttributes;

  const id = event.userName;
  const email = userAttributes.email ? userAttributes.email : undefined;
  const phone = userAttributes.phone_number
    ? userAttributes.phone_number
    : undefined;

  await createEvent<IEvent.User.IUser>(IEvent.User.Created, {
    id,
    phone,
    email,
  });

  return event;
};
