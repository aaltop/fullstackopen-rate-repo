import TextInput from "../components/TextInput";
import { formikErrorCheck } from "../utils";
import useSignIn from "../hooks/signIn";
import AuthStorage from "../utils/authStorage";

import { Formik } from "formik";
import { View, Button, StyleSheet } from "react-native";
import * as yup from "yup";

const loginSchema = yup.object().shape({
    username: yup.string()
        .min(3, "Username should be at least 3 characters")
        .max(32, "Username should be at most 32 characters")
        .required("Username is required"),
    password: yup.string()
        .min(8, "Password should be at least 8 characters")
        .max(20, "Password should be at most 20 characters")
        .required("Password is required")
});

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginTop: 30,
        marginLeft: "5%",
        marginRight: "5%",
        flexGrow: 1
    }
});

export default function SignIn()
{
    const [signIn, result] = useSignIn();

    const authStorage = new AuthStorage();

    async function onSubmit(credentials)
    {
        try {
            const { data } = await signIn(credentials);
            console.log(data);
            const token = data.authenticate.accessToken;
            await authStorage.setAccessToken(token);
            console.log("auth storage token: ", await authStorage.getAccessToken());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Formik
            initialValues={{username: "", password: ""}}
            onSubmit={onSubmit}
            validationSchema={loginSchema}
        >
            {({ handleChange, handleSubmit, values, ...props }) => (
                <View
                    style={styles.container}
                >
                    <TextInput
                        errorMessage={formikErrorCheck(props, "username") ?? props.errors.username}
                        placeholder="Username"
                        value={values.username}
                        onChangeText={handleChange("username")}
                    />
                    <TextInput
                        errorMessage={formikErrorCheck(props, "password") ?? props.errors.password}
                        placeholder="Password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                        secureTextEntry
                    />
                    <Button
                        style={{height: 60}}
                        onPress={handleSubmit}
                        title="Login"
                        disabled={result.loading}
                    />
                </View>
            )}

        </Formik>
    );
}