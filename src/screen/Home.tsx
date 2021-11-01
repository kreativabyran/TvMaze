import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useAxios from '../clients';
import { SEARCH } from '../../env';
import { ShowResult } from '../types';
import ShowListItem from '../components/ShowListItem';

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ShowResult[]>([]);

  const [{ data: searchData, loading: loadingSearch }, refetchSearchResults] = useAxios<Array<ShowResult>>(
    {
      url: `${SEARCH}${query.length > 0 ? query : 'a'}`,
    },
    { manual: false },
  );

  useEffect(() => {
    if (searchData) {
      setSearchResults(searchData);
    }
  }, [searchData]);

  const Item = (renderItem: ListRenderItemInfo<ShowResult>) => {
    const { item } = renderItem;

    return <ShowListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={(te) => setQuery(te)}
        value={query}
        placeholder='Search TVMaze'
      />
      <FlatList
        data={searchResults}
        renderItem={Item}
        keyExtractor={(item) => item.show.id.toString()}
        onRefresh={() => refetchSearchResults()}
        refreshing={loadingSearch}
      />
      <View style={styles.row}>
        <Text style={styles.copyright}>This app is powered by </Text>
        <View style={styles.mazeLogoContainer}>
          <Image source={{ uri: 'https://static.tvmaze.com/images/tvm-header-logo.png' }} style={styles.mazeLogo} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    margin: 9,
    borderWidth: 1,
    padding: 10,
  },
  copyright: {
    textAlign: 'center',
  },
  row: {
    padding: 5,
    minHeight: 50,
    backgroundColor: 'lightgray',
  },
  mazeLogoContainer: {
    maxHeight: 20,
  },
  mazeLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Home;
