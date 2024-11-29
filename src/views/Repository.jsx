import useRepository from "../hooks/useRepository";
import RepositoryItem from "../components/RepositoryItem";
import ReviewList from "../components/ReviewList";
import useRepoReviews from "../hooks/useRepoReviews";

import { useParams } from "react-router-native";

export default function Repository()
{
    const params = useParams();
    const repository = useRepository(params.repoId);
    const { reviews: repoReviews, handleFetchMore } = useRepoReviews(params.repoId, 5);

    if (!repository) return null;

    function onEndReached()
    {
        handleFetchMore();
    }

    return <ReviewList
        reviewsData={repoReviews}
        ListHeaderComponent={<RepositoryItem item={repository} showOpenUrl={true} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
    />;
}