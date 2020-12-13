export const dynamodbRole = {
  Arn: { "Fn::GetAtt": ["AppSyncDynamoDBServiceRole", "Arn"] },
};
