export namespace Comment {
  export const Created = "comment:created";
  export const Updated = "comment:updated";
  export const Deleted = "comment:deleted";

  export interface IComment {
    id: string;
    text: string;
    owner: string;
    postId: string;
    createdAt: string;
  }
}
