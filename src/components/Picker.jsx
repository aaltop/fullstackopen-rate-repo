import Text from "./Text";

import { Pressable, ScrollView, StyleSheet, View, Button } from "react-native";
import { useState } from "react";

const fontSize = 20;
const choiceBorderWidth = 2;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10
    },
    choice: {
        flexGrow: 1,
        textAlign: "center",
        textAlignVertical: "center",
        alignContent: "center",
        minHeight: 100,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: choiceBorderWidth,
        backgroundColor: "#fff",
        fontSize: fontSize
    },
    chosenChoice: {
        borderWidth: choiceBorderWidth + 2,
        fontWeight: "bold"


    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        textAlignVertical: "center",
        alignContent: "center",
        minHeight: 50,
        fontSize: fontSize+10,
        backgroundColor: "#fffa",
        borderRadius: 10
    },
    buttonsView: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        minWidth: "25%"
    }
});


function Choice({ value, setValue, text, isChosen})
{

    return <Pressable onPress={() => setValue(value)}>
        <Text style={[styles.choice, isChosen && styles.chosenChoice]}>
            {text}
        </Text>
    </Pressable>;
}

/**
 * 
 * @param {any} data array, contains objects with value and text property;
 * value property is the value of the choice, text is the rendered text
 * to represent the choice. 
 */
export default function Picker({ title, data, onConfirm, onBack, oldValue })
{
    const [value, setValue] = useState(oldValue ?? null);

    return <View>
            <Text style={styles.title} fontWeight={"bold"}>{title}</Text>
        <ScrollView
            contentContainerStyle={styles.container}
        >
            {data.map((datum, idx) => <Choice
                key={idx}
                setValue={setValue} 
                isChosen={datum.value === value}
                {...datum}
            />
            )}
        </ScrollView>
        <View style={styles.buttonsView}>
            <View style={styles.button}>
                <Button
                    title={"Confirm"}
                    onPress={() => onConfirm(value)}
                    disabled={value === null}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title={"Back"}
                    onPress={() => onBack()}
                />
            </View>
        </View>
    </View>;
}