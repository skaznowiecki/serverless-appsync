import { appSyncRole } from "../../../fragments/appsync-role";
import { commentsTableExports } from "../../../../../types/exports/comments/posts-table";
export const commentsTable = {
  type: "AMAZON_DYNAMODB",
  name: "CommentsTable",
  description: "Comments table",
  config: {
    tableName: commentsTableExports.TableName,
    serviceRoleArn: appSyncRole.DynamoDBArn,
  },
};
