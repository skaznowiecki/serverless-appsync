export const listPosts = {
  dataSource: "PostsTable",
  type: "Query",
  field: "listPosts",
  request: "posts/list-posts/request.vtl",
  response: "posts/list-posts/response.vtl",
};
