import ReviewList from "../components/ReviewList";
import useUserReviews from "../hooks/useUserReviews";
import RepositoryReview from "../components/RepositoryReview";
import paths from "../paths";
import useDeleteReview from "../hooks/useDeleteReview";

import { View, Button, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        borderColor: "black",
        borderRadius: 2
    },
    buttonsView: {
        flexDirection: "row",
        borderColor: "black",
        borderRadius: 2,
        gap: 20,
        marginTop: 5
    }
});

function RenderItem({item, navigate, deleteReview })
{

    function DeletionAlert()
    {
        return Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                },
                {
                    text: "Delete",
                    onPress: () => deleteReview(item.id)
                }
            ]
        );
    }

    return <View style={styles.container}>
        <RepositoryReview item={item} />
        <View style={styles.buttonsView}>
            <Button 
                title="View Repository"
                onPress={() => navigate(`${paths.repository}/${item.repository.id}`)}
            />
            <Button
                title="Delete Review"
                color={"crimson"}
                onPress={DeletionAlert}
            />
        </View>
    </View>;
}

export default function UserReviews()
{
    const userAndReviews = useUserReviews();
    const [deleteReview, _deleteReviewResult] = useDeleteReview();
    const navigate = useNavigate();

    return <ReviewList
        reviewsData={userAndReviews?.reviews ?? []}
        renderItem={({item}) => <RenderItem 
            item={item} 
            navigate={navigate}
            deleteReview={async id => {
                await deleteReview(id);
                userAndReviews.refetch();
            }}
        />}
    />;
}