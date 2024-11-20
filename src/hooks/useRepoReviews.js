import { REVIEWS } from "../grapql/repositories/queries";

import { useQuery } from "@apollo/client";

export default function useRepoReviews(id)
{
    const { loading, error, data } = useQuery(
        REVIEWS,
        {
            variables: { id },
            fetchPolicy: "cache-and-network"
        }
    )

    if (loading || error || !data) return [];

    const reviews = data.repository?.reviews?.edges?.map(edge => edge.node);
    return reviews ?? [];
}