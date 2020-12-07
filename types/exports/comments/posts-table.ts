export const commentsTableExports = {
  TableName: {
    "Fn::ImportValue": "CommentsTableName-${self:provider.stage}",
  },
  TableArn: {
    "Fn::ImportValue": "CommentsTableArn-${self:provider.stage}",
  },

  Indexes: {
    byPost: {
      "Fn::Join": [
        "/",
        [
          {
            "Fn::ImportValue": "CommentsTableArn-${self:provider.stage}",
          },
          "index",
          "byPost",
        ],
      ],
    },
  },
};
