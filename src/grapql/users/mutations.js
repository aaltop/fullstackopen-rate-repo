import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;


export const SIGN_UP = gql`
    mutation SignUp($user: CreateUserInput!) {
    createUser(user: $user) {
            id
            username
            createdAt
        }
    }
`;