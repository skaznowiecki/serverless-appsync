import { Resources } from "serverless/aws";
export const secretManagerPost: Resources = {
  Resources: {
    SecretsManagerPost: {
      Type: "AWS::SecretsManager::Secret",
      Properties: {
        Name: "${self:custom.project}-${self:provider.stage}-posts",
      },
    },
  },
};
