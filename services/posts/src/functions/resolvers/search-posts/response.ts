import Post from "../../../types/entities/post";

export default interface SearchPostResponse {
  items: Post[];
  nextToken: string | null;
}
