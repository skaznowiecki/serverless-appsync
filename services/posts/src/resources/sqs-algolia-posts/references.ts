export const sqsAlgoliaPosts = {
  Url: {
    Ref: "AlgoliaPostsQueue",
  },
  Arn: {
    "Fn::GetAtt": ["AlgoliaPostsQueue", "Arn"],
  },
};
