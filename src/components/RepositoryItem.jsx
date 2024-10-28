import { Text, View } from "react-native";



export default function RepositoryItem({ item })
{

    const {
        id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl,
    } = item;

    return (
        <View>
            <Text>
                Full Name: {fullName}
            </Text>
            <Text>
                Description: {description}
            </Text>
            <Text>
                Language: {language}
            </Text>
            <Text>
                Stars: {stargazersCount}
            </Text>
            <Text>
                Forks: {forksCount}
            </Text>
            <Text>
                Reviews: {reviewCount}
            </Text>
            <Text>
                Rating: {ratingAverage}
            </Text>
        </View>
    );
}