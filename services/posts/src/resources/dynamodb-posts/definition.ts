import { Resources } from "serverless/aws";
export const dynamodbPostsTable: Resources = {
  Resources: {
    PostsTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        AttributeDefinitions: [
          {
            AttributeName: "id",
            AttributeType: "S",
          },
          {
            AttributeName: "status",
            AttributeType: "S",
          },
          {
            AttributeName: "owner",
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
            IndexName: "byStatus",
            KeySchema: [
              {
                AttributeName: "status",
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
          {
            IndexName: "byOwner",
            KeySchema: [
              {
                AttributeName: "owner",
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
        TableName: "Posts.${self:provider.stage}",
      },
    },
  },
  Outputs: {
    PostsTableName: {
      Description: "Posts table Name",
      Value: {
        Ref: "PostsTable",
      },
      Export: {
        Name: "PostsTableName-${self:provider.stage}",
      },
    },
    PostsTableArn: {
      Description: "Posts table Arn",
      Value: {
        "Fn::GetAtt": ["PostsTable", "Arn"],
      },
      Export: {
        Name: "PostsTableArn-${self:provider.stage}",
      },
    },
  },
};
