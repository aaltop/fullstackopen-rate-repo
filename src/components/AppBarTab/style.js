import theme from "../../theme";

import { StyleSheet } from "react-native";


export default StyleSheet.create({
    styling: {
        flexGrow: 0,
        width: 100,
        backgroundColor: theme.colors.primary,
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        textAlign: "center"
    }
});