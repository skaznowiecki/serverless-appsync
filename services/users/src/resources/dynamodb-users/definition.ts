import { Resources } from "serverless/aws";
export const dynamodbUsersTable: Resources = {
  Resources: {
    UsersTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S",
          },
        ],
        BillingMode: "PAY_PER_REQUEST",
        KeySchema: [
          {
            AttributeName: "id",
            KeyType: "HASH",
          },
        ],
        PointInTimeRecoverySpecification: {
          PointInTimeRecoveryEnabled: true,
        },
        StreamSpecification: {
          StreamViewType: "NEW_AND_OLD_IMAGES",
        },
        TableName: "Users.${self:provider.stage}",
      },
    },
  },
  Outputs: {
    UsersTableName: {
      Description: "Users table Name",
      Value: {
        Ref: "UsersTable",
      },
      Export: {
        Name: "UsersTableName-${self:provider.stage}",
      },
    },
    UsersTableArn: {
      Description: "Users table Arn",
      Value: {
        "Fn::GetAtt": ["UsersTable", "Arn"],
      },
      Export: {
        Name: "UsersTableArn-${self:provider.stage}",
      },
    },
  },
};
