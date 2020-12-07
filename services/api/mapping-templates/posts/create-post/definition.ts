export const createPost = {
  dataSource: "PostsTable",
  type: "Mutation",
  field: "createPost",
  request: "posts/create-post/request.vtl",
  response: "posts/create-post/response.vtl",
};
