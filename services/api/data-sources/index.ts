import { postsDataSources } from "./posts/index";
import { usersDataSources } from "./users/index";
import { commentsDataSources } from "./comments/index";
import { likesDataSources } from "./likes/index";

export const dataSources = [
  ...postsDataSources,
  ...usersDataSources,
  ...commentsDataSources,
  ...likesDataSources,
];
