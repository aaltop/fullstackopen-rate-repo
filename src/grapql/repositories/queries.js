import { gql } from "@apollo/client";

export const REPOSITORIES = gql`
    query Repositories(
        $orderBy: AllRepositoriesOrderBy,
        $orderDirection: OrderDirection
        $searchKeyword: String
    ) 
    {
        repositories(
            orderBy: $orderBy,
            orderDirection: $orderDirection,
            searchKeyword: $searchKeyword
        ) 
        {
            edges {
                node {
                    ...RepositoryItem
                }
            }
        }
    }
`

export const REPOSITORY = gql`
    query Repository($id: ID!) {
        repository(id: $id) {
            ...RepositoryItem
        }
    }
`

export const REVIEWS = gql`
    query Reviews($id: ID!, $first: Int, $after: String) {
        repository(id: $id) {
            id
            reviews(first: $first, after: $after) {
                edges {
                    node {
                    ...ReviewItemWithUser
                    }
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
                totalCount
            }
        }
    }
`