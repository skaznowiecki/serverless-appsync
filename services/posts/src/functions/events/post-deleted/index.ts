import { EventBridgeHandler } from "aws-lambda";
import Post from "../../../types/entities/post";
import AlgoliaMessage from "../../../lib/algolia/algolia-message";
import { IEvent } from "../../../../../../types/events/event";
import { SQS } from "../../../../../../utils/platform/sqs/index";
const ALGOLIA_POSTS_QUEUE_URL = process.env.ALGOLIA_POSTS_QUEUE_URL;

export const handler: EventBridgeHandler<
  "post:deleted",
  IEvent.Post.IPost,
  any
> = async (event) => {
  const post = event.detail;
  const algoliaMessage = {
    entity: post,
    action: "delete",
  } as AlgoliaMessage<Post>;
  await SQS.sendBatchMessage<AlgoliaMessage<Post>>(
    algoliaMessage,
    ALGOLIA_POSTS_QUEUE_URL
  );
};
