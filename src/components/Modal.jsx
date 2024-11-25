import {Modal as NativeModal, StyleSheet, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        minHeight: "fit-content",
        maxHeight: "50%",
        marginTop: "10%",
        marginBottom: "25%",
        width: "50%",
        marginLeft: "25%",
        marginRight: "25%",
        borderRadius: 10
    }
});

export default function Modal(props)
{
    return <NativeModal
            transparent
            {...props}
        >
            <View style={styles.container}>
                {props.children}
            </View>
        </NativeModal>;

}