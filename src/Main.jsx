import RepositoryList from './components/RepositoryList';
import AppBar from "./components/AppBar";
import SignIn from "./views/SignIn";

import { NativeRouter, Route, Routes } from 'react-router-native';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  repositoryList: {
    width: "100%"
  }
});

export default function Main()
{
    return (
        <NativeRouter>
            <View style={styles.container}>
                <AppBar />
                
                <Routes>
                    <Route
                        path="/"
                        element={<RepositoryList />}
                    />
                    <Route
                        path="/login"
                        element={<SignIn />}
                    />
                </Routes>
            </View>
        </NativeRouter>
    );
}