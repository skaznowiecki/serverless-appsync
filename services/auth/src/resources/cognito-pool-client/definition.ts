import { Resources } from "serverless/aws";
export const cognitoPoolClient: Resources = {
  Resources: {
    AuthUserClient: {
      Type: "AWS::Cognito::UserPoolClient",
      Properties: {
        AllowedOAuthFlows: ["code"],
        AllowedOAuthFlowsUserPoolClient: false,
        AllowedOAuthScopes: [],
        CallbackURLs:
          "${file(./src/resources/cognito-pool-client/oauth.json):${self:provider.stage}.CallbackURLs}",
        ClientName:
          "${self:service.name}-${self:provider.stage}-${self:custom.project}-user-pool-client",
        DefaultRedirectURI:
          "${file(./src/resources/cognito-pool-client/oauth.json):${self:provider.stage}.DefaultRedirectURI}",
        GenerateSecret: false,
        LogoutURLs:
          "${file(./src/resources/cognito-pool-client/oauth.json):${self:provider.stage}.LogoutURLs}",
        PreventUserExistenceErrors: "ENABLED",
        SupportedIdentityProviders: [],
        UserPoolId: {
          Ref: "AuthUserPool",
        },
      },
    },
  },
};
