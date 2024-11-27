import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import useModalPicker from '../hooks/useModalPicker';
import paths from '../paths';
import ModalPicker from './ModalPicker';
import Text from "./Text";
import TextInput from "./TextInput";

import { FlatList, View, StyleSheet, Button } from 'react-native';
import { Link } from 'react-router-native';
import { useState } from "react";
import { useDebounce } from "use-debounce";

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
    sortButtonsView: {
        flexDirection: "row",
        gap: 10
    },
    sortButtonView: {
        width: 200
    },
    sortPrefix: {
        minWidth: 100,
        textAlignVertical: "center",
        textAlign: "center"
    },
    sortView: {
        width: "100%",
        gap: 10
    },
    listHeader: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "5%",
        marginRight: "5%",
        
    },
    searchBar: {
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

function SearchBar({ onChangeSearch, defaultValue})
{
    return <TextInput
        style={styles.searchBar}
        placeholder={"Search for repository or owner"}
        defaultValue={defaultValue}
        onChangeText={onChangeSearch}
    />;
}

function SortButton({ prefix, title, onPress })
{
    return <View style={styles.sortButtonsView}>
        <Text
            style={styles.sortPrefix}
            fontSize={"subheading"}
            fontWeight={"bold"}
        >
            {prefix}
        </Text>
        <View style={styles.sortButtonView}>
            <Button color={theme.colors.primary} title={title} onPress={onPress}/>
        </View>
    </View>;
}

function SortOptions({ criteria, direction })
{
    return <View style={styles.sortView}>
        <SortButton prefix={"Sorted By"} title={criteria.text} onPress={() => criteria.setVisible(true)}/>
        <SortButton prefix={"Sort Order"} title={direction.text} onPress={() => direction.setVisible(true)}/>
    </View>;
}

export function RepositoryListContainer({
    repositories,
    sortCriteriaState,
    sortDirectionState,
    searchBarProps,
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
                ListHeaderComponent={<View style={styles.listHeader}>
                    <SearchBar {...searchBarProps}/>
                    <SortOptions
                        criteria={{ text: sortCriteriaState.getText(), setVisible: sortCriteriaState.state.setVisible}}
                        direction={{ text: sortDirectionState.getText(), setVisible: sortDirectionState.state.setVisible}}
                    />
                </View>
                }
            />
        </View>
    );
}


const RepositoryList = ({ style }) => {

    const sortCriteriaState = useModalPicker([
        {value: "CREATED_AT", text: "Date of first review"},
        {value: "RATING_AVERAGE", text: "Average rating"}
    ]);
    const sortDirectionState = useModalPicker([
        { value: "DESC", text: "Descending"},
        { value: "ASC", text: "Ascending"},
    ]);

    const [search, setSearch] = useState("");
    const [searchDebounce] = useDebounce(search, 500);

    const repositories = useRepositories(sortCriteriaState.getValue(), sortDirectionState.getValue());

    return <RepositoryListContainer
        repositories={repositories}
        style={style}
        sortCriteriaState={sortCriteriaState}
        sortDirectionState={sortDirectionState}
        searchBarProps={{onChangeSearch: setSearch, defaultValue: search === "" ? undefined : search}}
    />;
};

export default RepositoryList;