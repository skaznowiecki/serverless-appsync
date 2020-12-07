import { AwsIamFunction } from "../../../../../../utils/serverless/aws-iam-function";
import { sqsAlgoliaPosts } from "../../../resources/sqs-algolia-posts/references";
import configuration from "../../../../../../configuration";
import { IEvent } from "../../../../../../types/events/event";

export const postDeleted: AwsIamFunction = {
  handler: "src/functions/events/post-deleted/index.handler",
  environment: {
    ALGOLIA_POSTS_QUEUE_URL: sqsAlgoliaPosts.Url,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [IEvent.Post.Deleted],
        },
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["sqs:SendMessage"],
      Resource: [sqsAlgoliaPosts.Arn],
    },
  ],
};
