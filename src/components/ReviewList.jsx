import RepositoryReview from "./RepositoryReview";


import { FlatList, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});


export default function ReviewList({ reviewsData, renderItem, ...props })
{
    return <FlatList
        renderItem={renderItem ?? RepositoryReview}
        data={reviewsData}
        ItemSeparatorComponent={<View style={styles.separator} />}
        {...props}
    />;
}