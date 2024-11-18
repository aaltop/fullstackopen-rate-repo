import useSignIn from "../hooks/signIn";
import paths from "../paths";
import SignInComponent from "../components/SignIn";

import { useNavigate } from "react-router-native";

export default function SignIn()
{
    const [signIn, result] = useSignIn();
    const navigate = useNavigate();

    async function onSubmit(credentials)
    {
        try {
            const token = await signIn(credentials);
            if (token !== null) {
                navigate(paths.home);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <SignInComponent
        onSubmit={onSubmit}
        disabled={result.loading}
    />;
}