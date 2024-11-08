import Main from "./src/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import { AuthStorageContext } from "./src/contexts";

import { ApolloProvider } from "@apollo/client";

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

export default function App() 
{
  return (
    <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
            <Main />
        </AuthStorageContext.Provider>
    </ApolloProvider>
  );
}
