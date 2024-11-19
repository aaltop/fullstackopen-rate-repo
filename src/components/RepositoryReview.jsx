import Text from "./Text";

import { View, StyleSheet } from "react-native";

const viewStyles = StyleSheet.create({
    rating: {
        flexGrow: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        textAlign: "center",
        alignContent: "center",
        marginInline: 12
    },
    info: {
        flexGrow: 1
    },
    ratingAndInfo: {
        flexDirection: "row"
    },
    review: {
        flexWrap: "wrap"
    }
});

export default function RepositoryReview({ item })
{
    const {
        text,
        rating,
        createdAt,
        user
    } = item;

    let ratingColor;
    switch (true) {
        case rating < 33:
            ratingColor = "red";
            break;
        case rating < 66:
            ratingColor = "orange";
            break;
        default:
            ratingColor = "blue";
            break;
    }

    const extraStyles = StyleSheet.create({
        rating: {
            color: ratingColor,
            borderColor: ratingColor,
        }
    });

    const dateString = (new Date(createdAt)).toLocaleDateString();

    return <View>
        <View style={viewStyles.ratingAndInfo}>
            <Text style={[viewStyles.rating, extraStyles.rating]} fontWeight={"bold"}>
                {rating}
            </Text>
            <View style={viewStyles.info}>
                <Text fontWeight={"bold"}>
                    {user.username}
                </Text>
                <Text>
                    {dateString}
                </Text>
            </View>
        </View>
        <Text style={viewStyles.review}>
            {text}
        </Text>
    </View>;
}