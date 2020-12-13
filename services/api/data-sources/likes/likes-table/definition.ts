import { likesTableExports } from "../../../../../types/exports/likes/likes-table";
import { dynamodbRole } from "../../../resources/dynamodb-role/references";
export const likesTable = {
  type: "AMAZON_DYNAMODB",
  name: "LikesTable",
  description: "Likes table",
  config: {
    tableName: likesTableExports.TableName,
    serviceRoleArn: dynamodbRole.Arn,
  },
};
