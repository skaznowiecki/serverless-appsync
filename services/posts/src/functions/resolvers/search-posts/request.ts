export default interface SearchPostRequest {
  query: string;
  limit?: number;
  nextToken?: string;
}
