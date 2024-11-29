import { DELETE_REVIEW } from "../grapql/reviews/mutations";

import { useMutation } from "@apollo/client";

export default function useDeleteReview()
{
    const [mutate, result] = useMutation(DELETE_REVIEW);

    async function deleteReview(id)
    {
        return await mutate({ variables: { id }});
    }

    return [deleteReview, result];
}