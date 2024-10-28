import theme from "../theme";
import Text from "./Text";

import { Pressable, StyleSheet } from "react-native";


export default function AppBarTab({ text })
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

    return <Pressable style={style.styling}  onPress={ev => console.log(ev.target.innerText)}>
        <Text style={[style.styling]}>
            {text}
        </Text>
    </Pressable>;
}