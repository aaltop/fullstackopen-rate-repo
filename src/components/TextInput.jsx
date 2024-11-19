import Text from "./Text";
import theme from "../theme";
import { inputSize } from "../styles";

import { TextInput as BaseTextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    input: {
        borderWidth: 2,
        paddingLeft: 16,
        borderStyle: "solid",
        borderColor: theme.colors.offWhite,
        flexGrow: 1
    },
    inputError: {
        borderColor: "red"
    },
    error: {
        color: "red"
    }
});

export default function TextInput({ label, errorMessage, style: passedStyle, ...props })
{

    const labelComp = label ? <Text>{label}</Text> : null;

    const hasError = !!errorMessage;
    const errorComp = hasError
        ? <Text style={styles.error}>{errorMessage}</Text>
        : null;

    return (
        <View>
            <View style={styles.container}>
                {labelComp}
                <BaseTextInput
                    style={[styles.input,
                        inputSize.style,
                        hasError && styles.inputError,
                        passedStyle
                    ]}
                    selectionColor={"black"}
                    {...props}
                />
            </View>
            {errorComp}
        </View>
    );
}