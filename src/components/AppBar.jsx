import TabLink from "./AppBarTab/Link";
import TabButton from "./AppBarTab/Button";
import { USER } from "../grapql/users/queries";
import useAuthStorage from "../hooks/useAuthStorage";

import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from "@apollo/client";

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

function LogOut()
{
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    function logOut()
    {
        authStorage.removeAccessToken();
        apolloClient.resetStore();
    }

    return <TabButton
        text={"Sign out"}
        onPress={logOut}
    />;
}

const AppBar = () => {

    const queryUser = useQuery(USER);

    // not sure if this makes a lot of sense
    if (queryUser.loading) return null;

    return <View style={styles.container}>
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            snapToInterval={100} // need to synchronise this with the tab width
            horizontal
        >
            <TabLink text={"Repositories"} path={"/"}/>
            {queryUser.data?.me?.id
                ? <LogOut />
                : <TabLink text="Sign in" path={"/login"}/>
            }
        </ScrollView>
    </View>;
};

export default AppBar;