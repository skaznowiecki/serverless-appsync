import { createLike } from "./create-like/definition";
import { deleteLike } from "./delete-like/definition";
import { owner } from "./owner/definition";
export const likesMapping = [createLike, deleteLike, owner];
