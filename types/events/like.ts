export namespace Like {
  export const PostCreated = "like-post:created";
  export const CommentCreated = "like-comment:created";

  export const PostDeleted = "like-post:deleted";
  export const CommentDeleted = "like-comment:deleted";

  export interface ILike {
    entityId: string;
    entityName: "post" | "comment";
  }
}
