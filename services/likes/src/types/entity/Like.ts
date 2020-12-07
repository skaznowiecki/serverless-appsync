export default interface Like {
  id: string;
  owner: string;
  entityName: "post" | "comment";
  createdAt: string;
}
