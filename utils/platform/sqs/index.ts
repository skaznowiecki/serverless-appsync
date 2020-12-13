import { deleteMessage as DeleteMessage } from "./delete-message/index";
import { sendBatchMessage as SendBatchMessage } from "./send-batch-message/index";
export namespace SQS {
  export const deleteMessage = DeleteMessage;
  export const sendBatchMessage = SendBatchMessage;
}
