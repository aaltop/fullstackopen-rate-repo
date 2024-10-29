import AppBarTab from "./AppBarTab";

import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flexDirection: "row",
        minHeight: 100,
        gap: 2,
        justifyContent: "center"
    },
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab text={"Repositories"} path={"/"}/>
        <AppBarTab text="Sign in" path={"/login"}/>
    </View>;
};

export default AppBar;