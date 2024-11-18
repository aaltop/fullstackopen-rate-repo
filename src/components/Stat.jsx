import Text from "./Text";
import { numberInThousands } from "../utils/misc";

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
    const renderedNum = numberInThousands(number);

    return <View style={viewStyles.container}>
        <Text fontWeight="bold">
            {renderedNum}
        </Text>
        <Text>
            {text}
        </Text>
    </View>
}