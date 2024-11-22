import Text from "./Text";

import { Pressable, ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 10
    },
    choice: {
        flexGrow: 1,
        textAlign: "center",
        textAlignVertical: "center",
        minHeight: 100,
        alignContent: "center",
        borderRadius: 10,
        fontSize: 20
    }
});


function Choice({value, setValue, text})
{
    return <Pressable onPress={() => setValue(value)}>
        <Text style={[styles.choice, {borderColor: "black", borderWidth: 2}]}>
            {text}
        </Text>
    </Pressable>;
}

export default function Picker({setValue, data })
{
    return <ScrollView contentContainerStyle={styles.container}>
        {data.map((datum, idx) => <Choice key={idx} setValue={setValue} {...datum}/>)}
    </ScrollView>;
}