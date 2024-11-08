import Text from "../Text";
import style from "./style";

import { Link } from "react-router-native";


export default function AppBarTabLink({ text, path })
{
    return <Link style={style.styling} to={path}>
        <Text style={style.text}>
            {text}
        </Text>
    </Link>;
}