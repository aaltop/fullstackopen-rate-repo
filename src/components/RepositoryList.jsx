import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import useModalPicker from '../hooks/useModalPicker';
import paths from '../paths';
import ModalPicker from './ModalPicker';

import { FlatList, View, StyleSheet, Button } from 'react-native';
import { Link } from 'react-router-native';

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: theme.colors.offWhite
    },
    sortView: {
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
        marginBottom: 20
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

function RenderItem({ item })
{

    return <Link
        to={`${paths.repository}/${item.id}`}
    >
        <RepositoryItem item={item} showOpenUrl={false}/>
    </Link>;
}

function SortOptions({ criteria, direction })
{
    return <View style={styles.sortView}>
        <Button title={criteria.title} onPress={() => criteria.setVisible(true)}/>
        <Button title={direction.title} onPress={() => direction.setVisible(true)}/>
    </View>;
}

export function RepositoryListContainer({
    repositories,
    sortCriteriaState,
    sortDirectionState,
    style
})
{


    return (
        <View>
            <ModalPicker
                title={"Order By"}
                {...sortCriteriaState}
            />
            <ModalPicker
                title={"Order Direction"}
                {...sortDirectionState}
            />
            <FlatList
                style={style}
                data={repositories}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={RenderItem}
                ListHeaderComponent={() => <SortOptions
                    criteria={{ title: "Order By", setVisible: sortCriteriaState.state.setVisible}}
                    direction={{ title: "Order Direction", setVisible: sortDirectionState.state.setVisible}}

                />}
            />
        </View>
    );
}


const RepositoryList = ({ style }) => {

    const sortCriteriaState = useModalPicker([
        {value: "CREATED_AT", text: "Creation date (date of first review)"},
        {value: "RATING_AVERAGE", text: "Average rating"}
    ]);
    const sortDirectionState = useModalPicker([
        { value: "ASC", text: "Ascending"},
        { value: "DESC", text: "Descending"}
    ]);

    const repositories = useRepositories();

    return <RepositoryListContainer
        repositories={repositories}
        style={style}
        sortCriteriaState={sortCriteriaState}
        sortDirectionState={sortDirectionState}
    />;
};

export default RepositoryList;