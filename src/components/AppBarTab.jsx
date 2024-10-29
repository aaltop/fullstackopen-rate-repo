import theme from "../theme";
import Text from "./Text";

import { StyleSheet } from "react-native";
import { Link } from "react-router-native";


export default function AppBarTab({ text, path })
{
    const style = StyleSheet.create({
        styling: {
            flexGrow: 0,
            width: 100,
            backgroundColor: theme.colors.primary,
            justifyContent: "center"
        },
        text: {
            color: "#fff",
            textAlign: "center"
        }
    });

    return <Link style={style.styling} to={path}>
        <Text style={style.text}>
            {text}
        </Text>
    </Link>;
}