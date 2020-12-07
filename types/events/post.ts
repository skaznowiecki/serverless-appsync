export namespace Post {
  export const Created = "post:created";
  export const Updated = "post:updated";
  export const Deleted = "post:deleted";

  export interface IPost {
    id: string;
    title: string;
    text: string;
    owner: string;
    createdAt: string;
  }
}
