import { DynamoDB } from "aws-sdk";
import PostInput from "../../../../types/entities/post-input";

const dynamodb = new DynamoDB.DocumentClient();

export const updatePost = async (
  id: string,
  input: Partial<PostInput>,
  tableName: string = process.env.POSTS_TABLE
): Promise<DynamoDB.DocumentClient.UpdateItemOutput> => {
  const expressionAttributeNames = {};
  const expressionAttributeValues = {};
  const updateExpression = [];

  if (input.commentCount) {
    expressionAttributeNames["#CC"] = "commentCount";
    expressionAttributeValues[":cc"] = input.commentCount;
    expressionAttributeValues[":start"] = 0;

    updateExpression.push("#CC = if_not_exists(#CC, :start) + :cc");
  }

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
