import Main from "./src/Main";
import createApolloClient from "./src/utils/apolloClient";

import { ApolloProvider } from "@apollo/client";

const apolloClient = createApolloClient();

export default function App() 
{
  return (
    <ApolloProvider client={apolloClient}>
        <Main />
    </ApolloProvider>
  );
}
