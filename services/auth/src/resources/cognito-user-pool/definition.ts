import { Resources } from "serverless/aws";
export const cognitoUserPool: Resources = {
  Resources: {
    AuthUserPool: {
      Type: "AWS::Cognito::UserPool",
      Properties: {
        AccountRecoverySetting: {
          RecoveryMechanisms: [
            {
              Name: "verified_email",
              Priority: 1,
            },
          ],
        },
        AutoVerifiedAttributes: ["email"],
        AdminCreateUserConfig: {
          AllowAdminCreateUserOnly: false,
        },
        EmailConfiguration: {
          EmailSendingAccount: "COGNITO_DEFAULT",
        },
        Policies: {
          PasswordPolicy: {
            MinimumLength: 8,
            RequireNumbers: false,
          },
        },
        UsernameAttributes: ["email"],
        UserPoolName:
          "${self:service.name}-${self:provider.stage}-${self:custom.project}",
      },
    },
  },
  Outputs: {
    AuthUserPoolArn: {
      Description: "Auth user pool ARN",
      Value: {
        "Fn::GetAtt": ["AuthUserPool", "Arn"],
      },
      Export: {
        Name: "AuthUserPoolArn-${self:provider.stage}",
      },
    },
    AuthUserPoolId: {
      Description: "Auth user pool ID",
      Value: {
        Ref: "AuthUserPool",
      },
      Export: {
        Name: "AuthUserPoolId-${self:provider.stage}",
      },
    },
  },
};
