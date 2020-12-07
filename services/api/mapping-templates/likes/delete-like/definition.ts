export const deleteLike = {
  dataSource: "LikesTable",
  type: "Mutation",
  field: "deleteLike",
  request: "likes/delete-like/request.vtl",
  response: "likes/delete-like/response.vtl",
};
