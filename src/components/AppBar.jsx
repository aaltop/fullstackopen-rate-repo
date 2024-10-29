import AppBarTab from "./AppBarTab";

import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    scrollView: {
        paddingTop: Constants.statusBarHeight
    },
    container: {
        minHeight: 100
    },
    contentContainer: {
        gap: 2
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            snapToInterval={100} // need to synchronise this with the tab width
            horizontal
        >
            <AppBarTab text={"Repositories"} path={"/"}/>
            <AppBarTab text="Sign in" path={"/login"}/>
        </ScrollView>
    </View>
};

export default AppBar;