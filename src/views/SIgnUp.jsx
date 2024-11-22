import SignUpComponent from "../components/SignUp";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/signIn";
import paths from "../paths";

import { useNavigate } from "react-router-native";
import { View } from "react-native";

export default function SignUp()
{
    const [signUp, result] = useSignUp();
    const [signIn, _signInresult] = useSignIn();
    const navigate = useNavigate();

    let message = {};

    if (result.called && !result.loading) {
        message = (result.error === undefined)
            ? { text: "You have been signed up!", error: false}
            : { text: result.error?.message, error: true};
    }
    
    async function onSubmit(values)
    {
        const ret = await signUp(values.username, values.password);
        if (ret) {
            try {
                const token = await signIn({
                    username: values.username,
                    password: values.password
                });
                if (token !== null) {
                    navigate(paths.home);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return <View>
        <SignUpComponent
            onSubmit={onSubmit}
            disabled={result.loading}
            message={message}
        />
    </View>;
}