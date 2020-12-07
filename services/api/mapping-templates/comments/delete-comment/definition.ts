export const deleteComment = {
  dataSource: "CommentsTable",
  type: "Mutation",
  field: "deleteComment",
  request: "comments/delete-comment/request.vtl",
  response: "comments/delete-comment/response.vtl",
};
