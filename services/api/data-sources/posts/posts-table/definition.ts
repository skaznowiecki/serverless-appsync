import { postsTableExports } from "../../../../../types/exports/posts/posts-table";
import { dynamodbRole } from "../../../resources/dynamodb-role/references";
export const postsTable = {
  type: "AMAZON_DYNAMODB",
  name: "PostsTable",
  description: "Posts table",
  config: {
    tableName: postsTableExports.TableName,
    serviceRoleArn: dynamodbRole.Arn,
  },
};
