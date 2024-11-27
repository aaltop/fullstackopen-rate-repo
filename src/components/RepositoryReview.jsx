import Text from "./Text";

import { View, StyleSheet } from "react-native";

const viewStyles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    rating: {
        flexGrow: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        alignContent: "center",
        marginLeft: 12,
        marginRight: 12
    },
    info: {
        justifyContent: "center",
        height: 50,
    },
    ratingAndInfo: {
        width: "100%",
        maxWidth: 500,
        flexDirection: "row",
        alignItems: "flex-start",
    },
    review: {
        flexWrap: "wrap",
        maxWidth: 500,
        paddingLeft: 25,
        paddingRight: 25,
    }
});

export default function RepositoryReview({ item })
{
    const {
        text,
        rating,
        createdAt,
        user,
        repository
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
            borderColor: ratingColor,
            color: ratingColor,
            textAlign: "center",
            textAlignVertical: "center",
        },
    });

    const dateString = (new Date(createdAt)).toLocaleDateString();

    return <View style={viewStyles.container}>
        <View style={viewStyles.ratingAndInfo}>
            <Text style={[viewStyles.rating, extraStyles.rating]} fontWeight={"bold"}>
                {rating}
            </Text>
            <View style={viewStyles.info}>
                <Text fontWeight={"bold"}>
                    {user?.username ?? repository.fullName}
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