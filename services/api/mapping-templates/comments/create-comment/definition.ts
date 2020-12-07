export const createComment = {
  dataSource: "CommentsTable",
  type: "Mutation",
  field: "createComment",
  request: "comments/create-comment/request.vtl",
  response: "comments/create-comment/response.vtl",
};
