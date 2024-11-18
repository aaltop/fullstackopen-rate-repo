import { gql } from "@apollo/client";


export const REPOSITORY_ITEM = gql`
    fragment RepositoryItem on Repository {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
        url
    }
`;