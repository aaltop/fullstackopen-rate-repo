import { REPOSITORIES } from '../grapql/repositories/queries';

import { useQuery } from '@apollo/client';

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
    const { loading, error, data } = useQuery(
            REPOSITORIES,
            {
                fetchPolicy: "cache-and-network",
                variables: {
                    orderBy,
                    orderDirection,
                    searchKeyword
                }
            }
    )

    // not entirely sure what the best course of action for each would
    // be. I guess errors should be somehow reported, rather than
    // silently ignored
    if (loading || error || !data) return [];

    return data.repositories.edges.map(edge => edge.node);
};

export default useRepositories;