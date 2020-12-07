export const dynamodbLikes = {
  TableName: {
    Ref: "LikesTable",
  },
  TableArn: {
    "Fn::GetAtt": ["LikesTable", "Arn"],
  },
  StreamArn: {
    "Fn::GetAtt": ["LikesTable", "StreamArn"],
  },
};
