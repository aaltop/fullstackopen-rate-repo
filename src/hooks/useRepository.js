import { REPOSITORY } from "../grapql/repositories/queries";

import { useQuery } from "@apollo/client";

export default function useRepository(id)
{
    const { loading, error, data } = useQuery(
        REPOSITORY,
        {
            variables: { id },
            fetchPolicy: "cache-and-network"
        }
    );

    if (loading || error || !data ) return null;

    return data.repository;
}