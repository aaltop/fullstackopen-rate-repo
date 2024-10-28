import RepositoryList from './RepositoryList';

import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default function Main()
{
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
}