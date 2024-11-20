import { CREATE_REVIEW } from "../grapql/reviews/mutations";
import ReviewForm from "../components/ReviewForm";
import paths from "../paths";

import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";


export default function CreateReview()
{
    const [createReview, { loading, data }] = useMutation(
        CREATE_REVIEW,
    );
    const navigate = useNavigate();


    const repoId = data?.createReview?.repositoryId;
    useEffect(() => {
        if (repoId) navigate(`${paths.repository}/${repoId}`);
    }, [repoId]);

    function onSubmit(values)
    {
        const review = {
            ownerName: values.repoOwnerUsername,
            rating: values.rating,
            repositoryName: values.repoName,
            text: values.review
        };

        createReview({ variables: { review }});
    }

    return <ReviewForm
        onSubmit={onSubmit}
        disabled={loading}
        />
}