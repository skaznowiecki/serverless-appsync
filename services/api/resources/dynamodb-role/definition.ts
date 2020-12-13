import { Resources } from "serverless/aws";
import { postsTableExports } from "../../../../types/exports/posts/posts-table";
import { usersTableExports } from "../../../../types/exports/users/users-table";
import { commentsTableExports } from "../../../../types/exports/comments/posts-table";
import { likesTableExports } from "../../../../types/exports/likes/likes-table";

export const dynamoDBServiceRole: Resources = {
  Resources: {
    AppSyncDynamoDBServiceRole: {
      Type: "AWS::IAM::Role",
      Properties: {
        RoleName: "DynamoDB-AppSync-Role-${self:provider.stage}",
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
            PolicyName: "DynamoDB-AppSync-Policy-${self:provider.stage}",
            PolicyDocument: {
              Version: "2012-10-17",
              Statement: [
                {
                  Effect: "Allow",
                  Action: ["dynamodb:UpdateItem"],
                  Resource: [postsTableExports.TableArn],
                },
                {
                  Effect: "Allow",
                  Action: ["dynamodb:DeleteItem"],
                  Resource: [
                    likesTableExports.TableArn,
                    postsTableExports.TableArn,
                    commentsTableExports.TableArn,
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["dynamodb:PutItem"],
                  Resource: [
                    postsTableExports.TableArn,
                    commentsTableExports.TableArn,
                    likesTableExports.TableArn,
                  ],
                },
                {
                  Effect: "Allow",
                  Action: ["dynamodb:GetItem"],
                  Resource: [
                    usersTableExports.TableArn,
                    postsTableExports.TableArn,
                    likesTableExports.TableArn,
                  ],
                },
                // {
                //   Effect: "Allow",
                //   Action: ["dynamodb:Scan"],
                //   Resource: [],
                // },
                {
                  Effect: "Allow",
                  Action: ["dynamodb:Query"],
                  Resource: [
                    postsTableExports.Indexes.byStatus,
                    postsTableExports.Indexes.byOwner,
                    commentsTableExports.Indexes.byPost,
                    likesTableExports.TableArn,
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
