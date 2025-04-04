// local imports
// ------------------
import Repositories from "./views/Repositories";
import SignIn from "./views/SignIn";
import Repository from "./views/Repository";
import CreateReview from "./views/CreateReview";
import SignUp from "./views/SignUp";
import UserReviews from "./views/UserReviews";

import AppBar from "./components/AppBar";
import paths from './paths';
// =====================

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
                        path={paths.repositories}
                        element={<Repositories />}
                    />
                    <Route
                        path={paths.login}
                        element={<SignIn />}
                    />
                    <Route
                        path={`${paths.repository}/:repoId`}
                        element={<Repository />}
                    />
                    <Route
                        path={`${paths.newReview}`}
                        element={<CreateReview />}
                    />
                    <Route
                        path={paths.signUp}
                        element={<SignUp />}
                    />
                    <Route
                        path={paths.userReviews}
                        element={<UserReviews />}
                    />
                </Routes>
            </View>
        </NativeRouter>
    );
}