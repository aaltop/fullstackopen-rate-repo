import { gql } from "@apollo/client";


export const USER = gql`
    query User {
        me {
            id
            username
        }
    }
`;