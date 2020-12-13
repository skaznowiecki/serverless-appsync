import { Resources } from "serverless/aws";

export const lambdaServiceRole: Resources = {
  Resources: {
    AppSyncLambdaServiceRole: {
      Type: "AWS::IAM::Role",
      Properties: {
        RoleName: "Lambda-AppSync-Role-${self:provider.stage}",
        AssumeRolePolicyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Principal: {
                Service: ["appsync.amazonaws.com"],
              },
              Action: ["sts:AssumeRole"],
            },
          ],
        },
        Policies: [
          {
            PolicyName: "Lambda-AppSync-Policy-${self:provider.stage}",
            PolicyDocument: {
              Version: "2012-10-17",
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["lambda:invokeFunction"],
                  Resource: [
                    "arn:aws:lambda:${self:provider.region}:#{AWS::AccountId}:function:*-${self:provider.stage}-*",
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  },
};
