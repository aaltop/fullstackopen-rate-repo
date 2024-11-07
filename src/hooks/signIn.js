import { AUTHENTICATE } from "../grapql/users/mutations";

import { useMutation } from "@apollo/client";


export default function useSignIn()
{
    const [mutate, result] = useMutation(AUTHENTICATE);

    async function signIn(credentials)
    {
        return await mutate({ variables: { credentials }});
    }

    return [signIn, result];
}