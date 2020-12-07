import { Resources } from "serverless/aws";
export const sqsAlgoliaPostsQueue: Resources = {
  Resources: {
    AlgoliaPostsQueue: {
      Type: "AWS::SQS::Queue",
      Properties: {
        QueueName:
          "${self:custom.common.servicePrefixHyphenated}-algolia-posts",
      },
    },
  },
  Outputs: {
    AlgoliaPostsQueueArn: {
      Description: "Queue ARN",
      Value: {
        Ref: "AlgoliaPostsQueue",
      },
      Export: {
        Name: "AlgoliaPostsQueueArn-${self:provider.stage}",
      },
    },
  },
};
