import { SQSHandler } from "aws-lambda";
import Post from "../../../types/entities/post";
import { serializePost } from "../../../lib/algolia/serialize-post/index";
import { algoliaStore } from "../../../lib/algolia/store/index";
import AlgoliaPost from "../../../types/algolia-post";
import AlgoliaMessage from "../../../lib/algolia/algolia-message";
import { algoliaDestroy } from "../../../lib/algolia/destroy/index";

export const handler: SQSHandler = async (event) => {
  const records = event.Records;

  const createRecords: AlgoliaPost[] = [];
  const deleteRecords: string[] = [];

  records.forEach((record) => {
    const algoliaMessage = JSON.parse(record.body) as AlgoliaMessage<Post>;
    const algoliaPost = serializePost(algoliaMessage.entity);

    if (algoliaMessage.action === "create") {
      createRecords.push(algoliaPost);
    } else if (algoliaMessage.action === "delete") {
      deleteRecords.push(algoliaPost.objectID);
    }
  });

  if (createRecords.length) {
    await algoliaStore<AlgoliaPost>(createRecords);
  }

  if (deleteRecords.length) {
    await algoliaDestroy(deleteRecords);
  }
};
