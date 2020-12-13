import { postsResolver } from "../../../../../types/exports/posts/posts-resolver";
import { lambdaRole } from "../../../resources/lambda-role/references";
export const searchPosts = {
  type: "AWS_LAMBDA",
  name: "SearchPosts",
  description: "Search posts lambda",
  config: {
    functionName: "SearchPosts",
    lambdaFunctionArn: postsResolver.searchPostsLambdaArn,
    serviceRoleArn: lambdaRole.Arn,
  },
};
