import RepositoryList from './RepositoryList';
import AppBar from "./AppBar";


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
        <View style={styles.container}>
            <AppBar />
            <View style={styles.repositoryList}>
                <RepositoryList style={styles.repositoryList} />
            </View>
        </View>
    );
}