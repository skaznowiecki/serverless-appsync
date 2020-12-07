import { Resources } from "serverless/aws";
export const dynamodbCommentsTable: Resources = {
  Resources: {
    CommentsTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S",
          },
          {
            AttributeName: "postId",
            AttributeType: "S",
          },
          {
            AttributeName: "createdAt",
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
        GlobalSecondaryIndexes: [
          {
            IndexName: "byPost",
            KeySchema: [
              {
                AttributeName: "postId",
                KeyType: "HASH",
              },
              {
                AttributeName: "createdAt",
                KeyType: "RANGE",
              },
            ],
            Projection: {
              ProjectionType: "ALL",
            },
          },
        ],
        PointInTimeRecoverySpecification: {
          PointInTimeRecoveryEnabled: true,
        },
        StreamSpecification: {
          StreamViewType: "NEW_AND_OLD_IMAGES",
        },
        TableName: "Comments.${self:provider.stage}",
      },
    },
  },
  Outputs: {
    CommentsTableName: {
      Description: "Comments table Name",
      Value: {
        Ref: "CommentsTable",
      },
      Export: {
        Name: "CommentsTableName-${self:provider.stage}",
      },
    },
    CommentsTableArn: {
      Description: "Comments table Arn",
      Value: {
        "Fn::GetAtt": ["CommentsTable", "Arn"],
      },
      Export: {
        Name: "CommentsTableArn-${self:provider.stage}",
      },
    },
  },
};
