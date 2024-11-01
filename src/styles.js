import theme from "./theme";

import { StyleSheet } from "react-native";



export const languageTag = StyleSheet.create({
    style: {
        backgroundColor: theme.colors.languageTag,
        borderRadius: 5,
        padding: 5,
        color: '#ffffff'
    }
});

export const inputSize = StyleSheet.create({
    style: {
        height: 60,
        fontSize: 16
    }
});