export const dynamodbComments = {
  TableName: {
    Ref: "CommentsTable",
  },
  TableArn: {
    "Fn::GetAtt": ["CommentsTable", "Arn"],
  },
  StreamArn: {
    "Fn::GetAtt": ["CommentsTable", "StreamArn"],
  },
};
