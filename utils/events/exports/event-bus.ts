import { IamRoleStatement } from "serverless/aws";
export const eventBus = {
  Role: (busName: string = "default") => {
    return {
      Effect: "Allow",
      Action: ["events:PutEvents"],
      Resource: [
        "arn:aws:events:${self:provider.region}:#{AWS::AccountId}:event-bus/" +
          busName,
      ],
    } as IamRoleStatement;
  },
};
