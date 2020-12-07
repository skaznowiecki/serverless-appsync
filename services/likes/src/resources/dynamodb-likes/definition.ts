import { Resources } from "serverless/aws";
export const dynamodbLikesTable: Resources = {
  Resources: {
    LikesTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S",
          },
          {
            AttributeName: "owner",
            AttributeType: "S",
          },
        ],
        BillingMode: "PAY_PER_REQUEST",
        KeySchema: [
          {
            AttributeName: "id",
            KeyType: "HASH",
          },
          {
            AttributeName: "owner",
            KeyType: "RANGE",
          },
        ],
        PointInTimeRecoverySpecification: {
          PointInTimeRecoveryEnabled: true,
        },
        StreamSpecification: {
          StreamViewType: "NEW_AND_OLD_IMAGES",
        },
        TableName: "Likes.${self:provider.stage}",
      },
    },
  },
  Outputs: {
    LikesTableName: {
      Description: "Likes table Name",
      Value: {
        Ref: "LikesTable",
      },
      Export: {
        Name: "LikesTableName-${self:provider.stage}",
      },
    },
    LikesTableArn: {
      Description: "Likes table Arn",
      Value: {
        "Fn::GetAtt": ["LikesTable", "Arn"],
      },
      Export: {
        Name: "LikesTableArn-${self:provider.stage}",
      },
    },
  },
};
