import { REPOSITORY_ITEM } from "./repositories/fragments";
import REVIEW_FRAGMENTS from "./reviews/fragments";

import { gql } from "@apollo/client";


const allFragments = gql`
    ${REPOSITORY_ITEM}
    ${REVIEW_FRAGMENTS}
`;

export default allFragments;