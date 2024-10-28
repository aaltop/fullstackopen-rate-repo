import { languageTag } from "../styles";
import Text from "./Text";

import { StyleSheet, View } from "react-native";



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

    const styles = StyleSheet.create({
        container: {
            width: "100%",
        },
        picture: {
            flexGrow: 0
        },
        info: {
            alignItems: "flex-start",
        },
        infoAndPicture: {
            flexDirection: "row",
        },
        stats: {
            flexDirection: "row",
            gap: 5
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.infoAndPicture}>
                <View style={styles.picture}>
                    <Text>
                        An Image here
                    </Text>
                </View>
                <View style={styles.info}>
                    <Text fontWeight="bold">
                        {fullName}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                    <Text style={[languageTag.style, { flexGrow: 0}]}>
                        {language}
                    </Text>
                </View>
            </View>
            <View style={styles.stats}>
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
        </View>
    );
}