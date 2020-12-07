import { appSyncRole } from "../../../fragments/appsync-role";
import { likesTableExports } from "../../../../../types/exports/likes/likes-table";
export const likesTable = {
  type: "AMAZON_DYNAMODB",
  name: "LikesTable",
  description: "Likes table",
  config: {
    tableName: likesTableExports.TableName,
    serviceRoleArn: appSyncRole.DynamoDBArn,
  },
};
