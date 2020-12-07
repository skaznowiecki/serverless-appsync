export const usersTableExports = {
  TableName: {
    "Fn::ImportValue": "UsersTableName-${self:provider.stage}",
  },
  TableArn: {
    "Fn::ImportValue": "UsersTableArn-${self:provider.stage}",
  },
};
