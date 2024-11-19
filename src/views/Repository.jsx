import useRepository from "../hooks/useRepository";
import RepositoryItem from "../components/RepositoryItem";
import RepositoryReview from "../components/RepositoryReview";
import useRepoReviews from "../hooks/useRepoReviews";

import { useParams } from "react-router-native";
import { FlatList, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});

export default function Repository()
{
    const params = useParams();
    const repository = useRepository(params.repoId);
    const repoReviews = useRepoReviews(params.repoId);

    if (!repository) return null;

    return <FlatList
        renderItem={RepositoryReview}
        data={repoReviews}
        ItemSeparatorComponent={<View style={styles.separator} />}
        ListHeaderComponent={<RepositoryItem item={repository} showOpenUrl={true} />}
    />;
}