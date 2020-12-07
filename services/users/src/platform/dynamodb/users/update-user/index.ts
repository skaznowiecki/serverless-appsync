import { DynamoDB } from "aws-sdk";
import UserInput from "../../../../types/entities/user-input";

const dynamodb = new DynamoDB.DocumentClient();

export const updateUser = async (
  id: string,
  input: UserInput,
  tableName: string = process.env.USERS_TABLE
): Promise<DynamoDB.DocumentClient.UpdateItemOutput> => {
  const expressionAttributeNames = {};
  const expressionAttributeValues = {};
  const updateExpression = [];

  if (input.postCount) {
    expressionAttributeNames["#PC"] = "postCount";
    expressionAttributeValues[":pc"] = input.postCount;
    expressionAttributeValues[":start"] = 0;

    updateExpression.push("#PC = if_not_exists(#PC, :start) + :pc");
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
