import allFragments from '../grapql/allFragments';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createFragmentRegistry } from "@apollo/client/cache";


const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.68.58:4000/graphql',
    cache: new InMemoryCache({
        fragments: createFragmentRegistry(allFragments)
    }),
  });
};

export default createApolloClient;