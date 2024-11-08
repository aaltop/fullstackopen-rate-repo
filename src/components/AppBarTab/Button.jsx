import Text from "../Text";
import style from "./style";

import { Pressable } from "react-native";


export default function AppBarTabButton({ text, onPress })
{
    return <Pressable style={style.styling} onPress={onPress}>
        <Text style={style.text}>
            {text}
        </Text>
    </Pressable>;
}