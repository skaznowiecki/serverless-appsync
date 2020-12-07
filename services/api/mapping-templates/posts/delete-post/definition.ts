export const deletePost = {
  dataSource: "PostsTable",
  type: "Mutation",
  field: "deletePost",
  request: "posts/delete-post/request.vtl",
  response: "posts/delete-post/response.vtl",
};
