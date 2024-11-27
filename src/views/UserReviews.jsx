import ReviewList from "../components/ReviewList";
import useUserReviews from "../hooks/useUserReviews";

export default function UserReviews()
{
    const userAndReviews = useUserReviews();

    return <ReviewList
        reviewsData={userAndReviews?.reviews ?? []}
    />;
}