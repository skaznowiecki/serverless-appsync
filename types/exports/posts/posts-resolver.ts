export const postsResolver = {
  searchPostsLambdaArn: {
    "Fn::ImportValue":
      "posts-SearchPostsLambdaFunctionArn-${self:provider.stage}",
  },
};
