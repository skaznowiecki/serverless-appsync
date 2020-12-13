import { createEvent } from "./create-event/index";
import { role } from "./role/index";

export namespace Event {
  export const Create = createEvent;
  export const Role = role;
}
