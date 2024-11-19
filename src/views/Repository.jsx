import useRepository from "../hooks/useRepository";
import RepositoryItem from "../components/RepositoryItem";
import RepositoryReview from "../components/RepositoryReview";

import { useParams } from "react-router-native";
import { FlatList } from "react-native";


const data = [
    {
        "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f.jaredpalmer.formik",
        "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
        "rating": 89,
        "createdAt": "2024-11-06T06:16:32.204Z",
        "user": {
        "id": "9b9d927e-2ee9-4f93-b96b-c8f677c63a5f",
        "username": "johndoe"
        }
    }
]

export default function Repository()
{
    const params = useParams();
    const repository = useRepository(params.repoId);

    if (!repository) return null;

    return <FlatList
        renderItem={RepositoryReview}
        data={data}
        ListHeaderComponent={<RepositoryItem item={repository} showOpenUrl={true} />}
    />;
}