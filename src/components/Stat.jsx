import Text from "./Text";

import { View, StyleSheet } from "react-native";

const viewStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexGrow: 1,
        margin: 10
    }
})

export default function Stat({ number, text })
{
    // round to precision in integers, then divide further to
    // get the actual wanted magnitude (in thousands in this case)
    const renderedNum = number < 1000
        ? number
        : Math.round(number/100)/10 + "k";

    return <View style={viewStyles.container}>
        <Text fontWeight="bold">
            {renderedNum}
        </Text>
        <Text>
            {text}
        </Text>
    </View>
}