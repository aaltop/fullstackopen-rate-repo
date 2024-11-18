import RepositoryList from '../components/RepositoryList';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  repositoryList: {
    width: "100%"
  }
});

export default function Repositories()
{
    return (
        <View style={styles.repositoryList}>
            <RepositoryList style={styles.repositoryList} />
        </View>
    );
}