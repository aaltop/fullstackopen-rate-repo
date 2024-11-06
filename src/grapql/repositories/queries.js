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