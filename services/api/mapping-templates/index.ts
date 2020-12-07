import { postsMapping } from "./posts/index";
import { usersMapping } from "./users/index";
import { commentsMapping } from "./comments/index";
import { likesMapping } from "./likes/index";

export const mappingTamplates = [
  ...postsMapping,
  ...usersMapping,
  ...commentsMapping,
  ...likesMapping,
];
