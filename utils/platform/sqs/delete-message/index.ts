import { SQS } from "aws-sdk";
const sqs = new SQS();

export const deleteMessage = async (
  receiptHandle: string,
  queueUrl: string
): Promise<{}> => {
  const params = {
    QueueUrl: queueUrl,
    ReceiptHandle: receiptHandle,
  } as SQS.DeleteMessageRequest;
  return sqs.deleteMessage(params).promise();
};
