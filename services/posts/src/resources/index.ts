import { Resources } from "serverless/aws";
import { dynamodbPostsTable } from "./dynamodb-posts/definition";
import { sqsAlgoliaPostsQueue } from "./sqs-algolia-posts/definition";
import { resolverOutputs } from "./resolver-outputs/index";

export const resources: Resources = {
  Resources: {
    ...dynamodbPostsTable.Resources,
    ...sqsAlgoliaPostsQueue.Resources,
  },
  Outputs: {
    ...dynamodbPostsTable.Outputs,
    ...sqsAlgoliaPostsQueue.Outputs,
    ...resolverOutputs,
  },
};
