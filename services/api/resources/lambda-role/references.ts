export const lambdaRole = {
  Arn: {
    "Fn::GetAtt": ["AppSyncLambdaServiceRole", "Arn"],
  },
};
