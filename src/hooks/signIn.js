import { AUTHENTICATE } from "../grapql/users/mutations";
import useAuthStorage from "./useAuthStorage";

import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";


export default function useSignIn()
{
    const [mutate, result] = useMutation(AUTHENTICATE);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    async function signIn(credentials)
    {
        const { data } = await mutate({ variables: { credentials }});
        console.log(data);
        if (result.error) {
            console.log(result.error);
            return null;
        }
        const token = data?.authenticate?.accessToken;
        if (token === undefined) return null;
        authStorage.setAccessToken(token);
        apolloClient.resetStore();
        return token;
        
    }

    return [signIn, result];
}