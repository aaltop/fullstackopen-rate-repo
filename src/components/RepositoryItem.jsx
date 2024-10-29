import { languageTag } from "../styles";
import Text from "./Text";
import Stat from "./Stat";

import { Image, StyleSheet, View } from "react-native";



export default function RepositoryItem({ item })
{

    const {
        _id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl,
    } = item;

    const viewStyles = StyleSheet.create({
        container: {
            width: "100%",
        },
        picture: {
            flexGrow: 0
        },
        info: {
            alignItems: "flex-start",
            flexGrow: 1,
            width: 0,
            gap: 5
        },
        infoAndPicture: {
            flexDirection: "row",
        },
        stats: {
            flexDirection: "row",
            flexWrap: "wrap"
        }
    });

    const styles = StyleSheet.create({
        avatarImage: {
            width: 50,
            height: 50,
            margin: 10,
            borderRadius: 10
        },
        languageTag: {
        }
    });

    return (
        <View style={viewStyles.container}>
            <View style={viewStyles.infoAndPicture}>
                <View style={viewStyles.picture}>
                    <Image
                        style={styles.avatarImage}
                        source={{ uri: ownerAvatarUrl }}
                    ></Image>
                </View>
                <View style={viewStyles.info}>
                    <Text fontWeight="bold">
                        {fullName}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                    <Text style={[languageTag.style, styles.languageTag]}>
                        {language}
                    </Text>
                </View>
            </View>
            <View style={viewStyles.stats}>
                <Stat number={stargazersCount} text={"Stars"} />
                <Stat number={forksCount} text={"Forks"} />
                <Stat number={reviewCount} text={"Reviews"} />
                <Stat number={ratingAverage} text={"Rating"} />
            </View>
        </View>
    );
}