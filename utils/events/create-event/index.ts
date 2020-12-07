import { EventBridge } from "aws-sdk";

const eventBridge = new EventBridge();

export const createEvent = async <T>(
  eventName: string,
  payload: T | T[],
  busName: string = "default",
  env: string = process.env.STAGE,
  project: string = process.env.PROJECT
): Promise<EventBridge.PutEventsResponse | null> => {
  const payloads = Array.isArray(payload) ? payload : [payload];

  if (!payloads.length) {
    return null;
  }

  const entries = payloads.map((payload) => {
    return {
      EventBusName: busName,
      Source: `${project}-${env}:events`,
      DetailType: eventName,
      Detail: JSON.stringify(payload),
      Resources: [],
    } as EventBridge.PutEventsRequestEntry;
  });
  return eventBridge
    .putEvents({
      Entries: entries,
    })
    .promise();
};
