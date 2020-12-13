import { usersTableExports } from "../../../../../types/exports/users/users-table";
import { dynamodbRole } from "../../../resources/dynamodb-role/references";
export const usersTable = {
  type: "AMAZON_DYNAMODB",
  name: "UsersTable",
  description: "Users table",
  config: {
    tableName: usersTableExports.TableName,
    serviceRoleArn: dynamodbRole.Arn,
  },
};
