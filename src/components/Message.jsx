import Text from "./Text";

import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    message: {
        flexGrow: 1,
        flexWrap: "wrap",
    },
    error: {
        color: "red"
    }
});

export default function Message({ error, style, ...props})
{
    return <Text
        style={[styles.message, error && styles.error, style]}
        fontSize={"subheading"}
        fontWeight={"bold"}
        {...props}
    />;
}