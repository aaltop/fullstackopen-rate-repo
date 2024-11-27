import ReviewList from "../components/ReviewList";
import useUserReviews from "../hooks/useUserReviews";
import RepositoryReview from "../components/RepositoryReview";
import paths from "../paths";

import { View, Button, StyleSheet } from "react-native";
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

function RenderItem({item, navigate})
{

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
                onPress={() => console.log("clicked on delete")}
            />
        </View>
    </View>;
}

export default function UserReviews()
{
    const userAndReviews = useUserReviews();
    const navigate = useNavigate();

    return <ReviewList
        reviewsData={userAndReviews?.reviews ?? []}
        renderItem={({item}) => <RenderItem item={item} navigate={navigate}/>}
    />;
}