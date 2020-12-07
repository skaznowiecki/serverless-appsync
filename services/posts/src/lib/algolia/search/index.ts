import algoliasearch from "algoliasearch";
import { parsePost } from "../parse-post/index";
import AlgoliaPost from "../../../types/algolia-post";
import Post from "../../../types/entities/post";
const APPLICATION_ID = process.env.APPLICATION_ID;
const API_KEY = process.env.API_KEY;
const INDEX_NAME = process.env.INDEX_NAME;

export const algoliaSearch = async (
  query: string,
  page: number = 0,
  perPage: number = 100
): Promise<{
  items: Post[];
  nextToken: number | null;
}> => {
  const client = algoliasearch(APPLICATION_ID, API_KEY);
  const index = client.initIndex(INDEX_NAME);
  const results = await index.search(query, {
    page,
    hitsPerPage: perPage,
  });

  const numberOfPages = results.nbPages - 1;
  const nextToken = page >= numberOfPages ? null : ++page;
  const posts = results.hits.map((hit) => {
    return parsePost(hit as AlgoliaPost);
  });

  return {
    items: posts,
    nextToken,
  };
};
