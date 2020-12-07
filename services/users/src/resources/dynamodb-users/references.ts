export const dynamodbUsers = {
  TableName: {
    Ref: "UsersTable",
  },
  TableArn: {
    "Fn::GetAtt": ["UsersTable", "Arn"],
  },
};
