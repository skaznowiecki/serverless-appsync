import { AwsFunction, IamRoleStatement } from "serverless/aws";

export interface AwsIamFunction extends AwsFunction {
  iamRoleStatementsName?: string;
  iamRoleStatementsInherit?: boolean;
  iamRoleStatements: IamRoleStatement[];
}
