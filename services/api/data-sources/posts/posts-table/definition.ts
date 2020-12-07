import { postsTableExports } from "../../../../../types/exports/posts/posts-table";
import { appSyncRole } from "../../../fragments/appsync-role";
export const postsTable = {
  type: "AMAZON_DYNAMODB",
  name: "PostsTable",
  description: "Posts table",
  config: {
    tableName: postsTableExports.TableName,
    serviceRoleArn: appSyncRole.DynamoDBArn,
  },
};
