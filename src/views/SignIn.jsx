import Text from "../components/Text";
import TextInput from "../components/TextInput";
import { inputSize } from "../styles";

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

export default function SignIn()
{
    return (
        <Formik
            initialValues={{username: "", password: ""}}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View
                    style={styles.container}
                >
                    <TextInput
                        placeholder="Username"
                        value={values.username}
                        onChangeText={handleChange("username")}
                    />
                    <TextInput
                        placeholder={"Password"}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        secureTextEntry
                    />
                    <Button
                        style={{height: 60}}
                        onPress={handleSubmit}
                        title="Login"
                    />
                </View>
            )}

        </Formik>
    );
}