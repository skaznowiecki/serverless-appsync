export default interface AlgoliaMessage<T> {
  entity: T;
  action: "create" | "delete";
}
