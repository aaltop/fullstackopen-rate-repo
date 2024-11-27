import { gql } from "@apollo/client";

export const REVIEW_ITEM_BASE = gql`
    fragment ReviewItemBase on Review {
        id
        text
        rating
        createdAt
    }
`;

export const REVIEW_ITEM_WITH_USER = gql`
    fragment ReviewItemWithUser on Review {
        ...ReviewItemBase
        user {
            id
            username
        }
    }
`;

export const REVIEW_ITEM_WITH_REPO = gql`
    fragment ReviewItemWithRepo on Review {
        ...ReviewItemBase
        repository {
            id
            fullName
        }
    }
`

export default gql`
    ${REVIEW_ITEM_BASE}
    ${REVIEW_ITEM_WITH_REPO}
    ${REVIEW_ITEM_WITH_USER}
`;