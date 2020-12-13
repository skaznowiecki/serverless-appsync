import { SQS } from "aws-sdk";
import { chunkArray } from "../../../helpers/chunk-array/index";

const sqs = new SQS();
const MAX_MESSAGE_PER_BATCH = 10;

export const sendBatchMessage = async <T>(
  items: T | T[],
  queueUrl: string
): Promise<Array<SQS.SendMessageBatchResult>> => {
  const messages = Array.isArray(items) ? items : [items];
  const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
  return Promise.all(
    messagesChucked.map((messageChucked) =>
      _sendMessagesBatch(messageChucked, queueUrl)
    )
  );
};

const _sendMessagesBatch = async <T>(
  messages: Array<T>,
  queueUrl: string
): Promise<SQS.SendMessageBatchResult> => {
  const entries = messages.map((message, index) => {
    return {
      Id: String(index),
      MessageBody: JSON.stringify(message),
    } as SQS.SendMessageBatchRequestEntry;
  }) as SQS.SendMessageBatchRequestEntryList;

  const params: SQS.SendMessageBatchRequest = {
    QueueUrl: queueUrl,
    Entries: entries,
  };

  return sqs.sendMessageBatch(params).promise();
};
