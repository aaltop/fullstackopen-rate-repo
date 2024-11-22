import { SIGN_UP } from "../grapql/users/mutations";

import { useMutation } from "@apollo/client";

export default function useSignUp()
{
    const [mutate, result] = useMutation(SIGN_UP);

    async function signUp(username, password)
    {
        
        try {
            const { data } = await mutate({
                variables: {
                    user: { username, password } 
                }}
            );
            return data.createUser;
        } catch (error) {
            return null;
        }
    }

    return [signUp, result];
}