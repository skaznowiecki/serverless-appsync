export const updatePost = {
  dataSource: "PostsTable",
  type: "Mutation",
  field: "updatePost",
  request: "posts/update-post/request.vtl",
  response: "posts/update-post/response.vtl",
};
