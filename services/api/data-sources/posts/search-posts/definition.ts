import { appSyncRole } from "../../../fragments/appsync-role";
import { postsResolver } from "../../../../../types/exports/posts/posts-resolver";
export const searchPosts = {
  type: "AWS_LAMBDA",
  name: "SearchPosts",
  description: "Search posts lambda",
  config: {
    functionName: "SearchPosts",
    lambdaFunctionArn: postsResolver.searchPostsLambdaArn,
    serviceRoleArn: appSyncRole.LambdaArn,
  },
};
