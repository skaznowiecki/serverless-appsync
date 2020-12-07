export const algoliaPostsQueued: any = {
  handler: "src/functions/events/algolia-posts-queued/index.handler",
  environment: {
    APPLICATION_ID: "${self:custom.secrets.algolia.appId}",
    API_KEY: "${self:custom.secrets.algolia.apiKey}",
    INDEX_NAME: "${file(./src/configs/algolia.json):index}",
  },
  events: [
    {
      sqs: {
        arn: {
          "Fn::GetAtt": ["AlgoliaPostsQueue", "Arn"],
        },
        batchSize: 10,
      },
    },
  ],
};
