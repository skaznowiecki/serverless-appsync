export const appSyncRole = {
  LambdaArn: {
    "Fn::GetAtt": ["AppSyncLambdaServiceRole", "Arn"],
  },
  DynamoDBArn: { "Fn::GetAtt": ["AppSyncDynamoDBServiceRole", "Arn"] },
};
