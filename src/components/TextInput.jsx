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
    }
});

export default function TextInput({ label, ...props })
{

    const labelComp = label ? <Text>{label}</Text> : null;

    return (
        <View style={styles.container}>
            {labelComp}
            <BaseTextInput
                style={[styles.input, inputSize.style]}
                selectionColor={"black"}
                {...props}
            />
        </View>
    );
}