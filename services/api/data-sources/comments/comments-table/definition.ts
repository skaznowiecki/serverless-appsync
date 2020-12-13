import { commentsTableExports } from "../../../../../types/exports/comments/posts-table";
import { dynamodbRole } from "../../../resources/dynamodb-role/references";
export const commentsTable = {
  type: "AMAZON_DYNAMODB",
  name: "CommentsTable",
  description: "Comments table",
  config: {
    tableName: commentsTableExports.TableName,
    serviceRoleArn: dynamodbRole.Arn,
  },
};
