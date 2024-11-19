import { gql } from "@apollo/client";

export const REPOSITORIES = gql`
    query Repositories {
        repositories {
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
    query Reviews($id: ID!) {
        repository(id: $id) {
            reviews {
                edges {
                    node {
                    id
                    text
                    rating
                    createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`