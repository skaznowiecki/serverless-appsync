import algoliasearch from "algoliasearch";

const APPLICATION_ID = process.env.APPLICATION_ID;
const API_KEY = process.env.API_KEY;
const INDEX_NAME = process.env.INDEX_NAME;

export const algoliaDestroy = async (ids: string[]) => {
  const client = algoliasearch(APPLICATION_ID, API_KEY);
  const index = client.initIndex(INDEX_NAME);
  return index.deleteObjects(ids);
};
