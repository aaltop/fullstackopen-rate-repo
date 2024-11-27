import { gql } from "@apollo/client";


export const USER = gql`
    query User($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        ...ReviewItemWithRepo
                    }
                }
            }
        }
    }
`;