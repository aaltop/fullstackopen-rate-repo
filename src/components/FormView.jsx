import Message from "./Message";

import { StyleSheet, View, Button } from "react-native";


const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginTop: 30,
        marginLeft: "5%",
        marginRight: "5%",
        flexGrow: 1
    }
});
/**
 * 
 * `message`: { text: string, error: boolean }
 */
export default function FormView({ handleSubmit, disabled, children, buttonTitle, message })
{

    return <View
        style={styles.container}
    >
        {children}
        <Button
            style={{height: 60}}
            onPress={handleSubmit}
            title={buttonTitle}
            disabled={disabled ?? false}
        />
        <Message error={!!message?.error}>
            {message?.text}
        </Message>
    </View>;
}