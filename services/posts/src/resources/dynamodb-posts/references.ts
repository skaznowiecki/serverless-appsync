export const dynamodbPosts = {
  TableName: {
    Ref: "PostsTable",
  },
  TableArn: {
    "Fn::GetAtt": ["PostsTable", "Arn"],
  },
  StreamArn: {
    "Fn::GetAtt": ["PostsTable", "StreamArn"],
  },
};
