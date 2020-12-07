export const postsTableExports = {
  TableName: {
    "Fn::ImportValue": "PostsTableName-${self:provider.stage}",
  },
  TableArn: {
    "Fn::ImportValue": "PostsTableArn-${self:provider.stage}",
  },

  Indexes: {
    byStatus: {
      "Fn::Join": [
        "/",
        [
          {
            "Fn::ImportValue": "PostsTableArn-${self:provider.stage}",
          },
          "index",
          "byStatus",
        ],
      ],
    },
    byOwner: {
      "Fn::Join": [
        "/",
        [
          {
            "Fn::ImportValue": "PostsTableArn-${self:provider.stage}",
          },
          "index",
          "byOwner",
        ],
      ],
    },
  },
};
