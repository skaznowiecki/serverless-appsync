import { DynamoDB } from "aws-sdk";
import CommentInput from "../../../../types/entity/comment-input";

const dynamodb = new DynamoDB.DocumentClient();

export const updateComment = async (
  id: string,
  input: Partial<CommentInput>,
  tableName: string = process.env.COMMENTS_TABLE
): Promise<DynamoDB.DocumentClient.UpdateItemOutput> => {
  const expressionAttributeNames = {};
  const expressionAttributeValues = {};
  const updateExpression = [];

  if (input.likeCount) {
    expressionAttributeNames["#LC"] = "likeCount";
    expressionAttributeValues[":lc"] = input.likeCount;
    expressionAttributeValues[":start"] = 0;

    updateExpression.push("#LC = if_not_exists(#LC, :start) + :lc");
  }

  const params = {
    Key: {
      id,
    },
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
    UpdateExpression: `set ${updateExpression.join(",")}`,
    TableName: tableName,
  } as DynamoDB.DocumentClient.UpdateItemInput;
  return dynamodb.update(params).promise();
};
