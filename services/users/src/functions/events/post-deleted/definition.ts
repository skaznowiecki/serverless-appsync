import { AwsIamFunction } from "../../../../../../utils/serverless/aws-iam-function";
import { dynamodbUsers } from "../../../resources/dynamodb-users/references";
import { PostDeletedEventName } from "../../../../../../types/events/posts/post-deleted";
import configuration from "../../../../../../configuration";
export const postDeleted: AwsIamFunction = {
  handler: "src/functions/events/post-deleted/index.handler",
  environment: {
    USERS_TABLE: dynamodbUsers.TableName,
  },
  events: [
    {
      eventBridge: {
        pattern: {
          source: [configuration.busName],
          "detail-type": [PostDeletedEventName],
        },
      },
    },
  ],
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:UpdateItem"],
      Resource: [dynamodbUsers.TableArn],
    },
  ],
};
