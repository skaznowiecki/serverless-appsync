import { EventBridgeHandler } from "aws-lambda";
import Post from "../../../types/entities/post";
import { sendBatchMessageToSQS } from "../../../../../../utils/platform/send-batch-message-to-sqs/index";
import AlgoliaMessage from "../../../lib/algolia/algolia-message";
import { IEvent } from "../../../../../../types/events/event";
const ALGOLIA_POSTS_QUEUE_URL = process.env.ALGOLIA_POSTS_QUEUE_URL;

export const handler: EventBridgeHandler<
  "post:created",
  IEvent.Post.IPost,
  any
> = async (event) => {
  const post = event.detail;
  const algoliaMessage = {
    entity: post,
    action: "create",
  } as AlgoliaMessage<Post>;
  await sendBatchMessageToSQS<AlgoliaMessage<Post>>(
    algoliaMessage,
    ALGOLIA_POSTS_QUEUE_URL
  );
};
