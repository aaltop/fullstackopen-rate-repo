import theme from "../theme";
import Text from "./Text";

import { StyleSheet } from "react-native";
import { Link } from "react-router-native";


export default function AppBarTab({ text, path })
{
    const style = StyleSheet.create({
        styling: {
            flexGrow: 1,
            backgroundColor: theme.colors.primary,
            color: "#ffffff",
            textAlign: "center",
            verticalAlign: "middle",
        }
    });

    return <Link style={style.styling} to={path}>
        <Text style={[style.styling]}>
            {text}
        </Text>
    </Link>;
}