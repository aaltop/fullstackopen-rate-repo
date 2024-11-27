import useRepository from "../hooks/useRepository";
import RepositoryItem from "../components/RepositoryItem";
import ReviewList from "../components/ReviewList";
import useRepoReviews from "../hooks/useRepoReviews";

import { useParams } from "react-router-native";

export default function Repository()
{
    const params = useParams();
    const repository = useRepository(params.repoId);
    const repoReviews = useRepoReviews(params.repoId);

    if (!repository) return null;

    return <ReviewList
        reviewsData={repoReviews}
        ListHeaderComponent={<RepositoryItem item={repository} showOpenUrl={true} />}
    />;
}