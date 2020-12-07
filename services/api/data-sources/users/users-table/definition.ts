import { appSyncRole } from "../../../fragments/appsync-role";
import { usersTableExports } from "../../../../../types/exports/users/users-table";
export const usersTable = {
  type: "AMAZON_DYNAMODB",
  name: "UsersTable",
  description: "Users table",
  config: {
    tableName: usersTableExports.TableName,
    serviceRoleArn: appSyncRole.DynamoDBArn,
  },
};
