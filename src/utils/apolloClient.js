import allFragments from '../grapql/allFragments';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createFragmentRegistry } from "@apollo/client/cache";
import env from "../env";


const createApolloClient = () => {
  return new ApolloClient({
    uri: env.apollo_uri,
    cache: new InMemoryCache({
        fragments: createFragmentRegistry(allFragments)
    }),
  });
};

export default createApolloClient;