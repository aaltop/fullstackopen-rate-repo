import { AuthStorageContext } from "../contexts";

import { useContext } from "react";


export default function useAuthStorage()
{
    const authStorage = useContext(AuthStorageContext);
    return authStorage;
}