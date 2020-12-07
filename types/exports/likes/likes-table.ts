export const likesTableExports = {
  TableName: {
    "Fn::ImportValue": "LikesTableName-${self:provider.stage}",
  },
  TableArn: {
    "Fn::ImportValue": "LikesTableArn-${self:provider.stage}",
  },

  Indexes: {},
};
