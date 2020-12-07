export namespace User {
  export const Created = "user:created";

  export interface IUser {
    id: string;
    phone?: string;
    email?: string;
  }
}
