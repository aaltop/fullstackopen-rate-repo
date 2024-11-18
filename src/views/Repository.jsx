import useRepository from "../hooks/useRepository";
import RepositoryItem from "../components/RepositoryItem";

import { useParams } from "react-router-native";


export default function Repository()
{
    const params = useParams();
    const repository = useRepository(params.repoId);

    if (!repository) return null;

    return <RepositoryItem item={repository} showOpenUrl={true} />;
}