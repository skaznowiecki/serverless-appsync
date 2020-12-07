import { DynamoDB } from "aws-sdk";

const dynamodb = new DynamoDB.DocumentClient();

export const createUser = async (
  id: string,
  email?: string,
  phone?: string,
  tableName: string = process.env.USERS_TABLE
): Promise<DynamoDB.DocumentClient.PutItemOutput> => {
  const item = {
    id,
    email,
    phone,
    createdAt: new Date(),
  };
  const params = {
    Item: item,
    TableName: tableName,
  } as DynamoDB.DocumentClient.PutItemInput;
  return dynamodb.put(params).promise();
};
