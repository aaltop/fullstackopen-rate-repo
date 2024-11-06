import { REPOSITORY_ITEM } from "./repositories/fragments";

import { gql } from "@apollo/client";


const allFragments = gql`
    ${REPOSITORY_ITEM}
`;

export default allFragments;