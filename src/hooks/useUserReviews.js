import { USER } from "../grapql/users/queries";

import { useQuery } from "@apollo/client";

export default function useUserReviews()
{
    const { loading, error, data, refetch } = useQuery(USER,
        { variables: { includeReviews: true }}
    );

    if (loading || error || !data) return null;

    const reviews = data.me?.reviews.edges.map(edge => edge.node) ?? [];
    return { ...data.me, reviews, refetch };
}