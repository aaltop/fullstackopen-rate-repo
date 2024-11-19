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

export default function FormikForm({ handleSubmit, disabled, children, buttonTitle })
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
    </View>;
}