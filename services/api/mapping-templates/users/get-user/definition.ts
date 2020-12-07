export const getUser = {
  dataSource: "UsersTable",
  type: "Query",
  field: "getUser",
  request: "users/get-user/request.vtl",
  response: "users/get-user/response.vtl",
};
