import { AwsFunction } from "serverless/aws";
export const searchPosts: AwsFunction = {
  handler: "src/functions/resolvers/search-posts/index.handler",

  environment: {
    APPLICATION_ID: "${self:custom.secrets.algolia.appId}",
    API_KEY: "${self:custom.secrets.algolia.apiKey}",
    INDEX_NAME: "${file(./src/configs/algolia.json):index}",
  },
};
