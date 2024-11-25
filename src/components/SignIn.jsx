import TextInput from "./TextInput";
import { formikErrorCheck } from "../utils/formik";
import { loginSchema } from "../schemas/login";

import { Formik } from "formik";
import { View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginTop: 30,
        marginLeft: "5%",
        marginRight: "5%",
        flexGrow: 1
    }
});

export default function SignIn({ onSubmit, disabled })
{

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
                        disabled={disabled ?? false}
                    />
                </View>
            )}

        </Formik>
    );
}