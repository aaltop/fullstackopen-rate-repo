import { REVIEWS } from "../grapql/repositories/queries";

import { useQuery } from "@apollo/client";

export default function useRepoReviews(id, fetchInGroupsOf)
{
    const { loading, error, data, fetchMore } = useQuery(
        REVIEWS,
        {
            variables: { id, first: fetchInGroupsOf },
            fetchPolicy: "cache-and-network"
        }
    );


    if (loading || error || !data) return { reviews: [], handleFetchMore: () => {return false;}};

    function handleFetchMore()
    {
        const { hasNextPage, endCursor } = data.repository.reviews.pageInfo;

        if (!hasNextPage) return false;

        // This should merge these variables with the ones already specified
        // above
        fetchMore(
            { 
                variables: { after: endCursor },
            }
        );

        // Specifies that an attempt has been made to fetch
        return true;
    }


    const reviews = data.repository?.reviews?.edges?.map(edge => edge.node);
    return { reviews: reviews ?? [], handleFetchMore };
}