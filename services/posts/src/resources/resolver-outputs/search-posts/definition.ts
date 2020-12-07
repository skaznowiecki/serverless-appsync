import { Outputs } from "serverless/aws";

export const searchPostsOutputs: Outputs = {
  SearchPostsLambdaFunctionArn: {
    Value: {
      "Fn::GetAtt": ["SearchPostsLambdaFunction", "Arn"],
    },
    Export: {
      Name:
        "${self:service.name}-SearchPostsLambdaFunctionArn-${self:provider.stage}",
    },
  },
  SearchPostsIamRoleArn: {
    Value: {
      "Fn::GetAtt": ["IamRoleLambdaExecution", "Arn"],
    },
    Export: {
      Name: "${self:service.name}-SearchPostsIamRoleArn-${self:provider.stage}",
    },
  },
};
