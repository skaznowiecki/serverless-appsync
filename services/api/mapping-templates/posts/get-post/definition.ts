export const getPost = {
  dataSource: "PostsTable",
  type: "Query",
  field: "getPost",
  request: "posts/get-post/request.vtl",
  response: "posts/get-post/response.vtl",
};
