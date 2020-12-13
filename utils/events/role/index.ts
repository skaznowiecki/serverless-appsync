import { IamRoleStatement } from "serverless/aws";
export const role = (busName: string = "default"): IamRoleStatement => {
  return {
    Effect: "Allow",
    Action: ["events:PutEvents"],
    Resource: [
      "arn:aws:events:${self:provider.region}:#{AWS::AccountId}:event-bus/" +
        busName,
    ],
  };
};
