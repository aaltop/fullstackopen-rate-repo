import allFragments from '../grapql/allFragments';

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { createFragmentRegistry } from "@apollo/client/cache";
import { relayStylePagination } from "@apollo/client/utilities";
import env from "../env";

const httpLink = createHttpLink({
    uri: env.apollo_uri
});

const cache = new InMemoryCache({
    fragments: createFragmentRegistry(allFragments),
    typePolicies: {
        Repository: {
            fields: {
                reviews: relayStylePagination()
            }
        }
    }
})

const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });
};

export default createApolloClient;