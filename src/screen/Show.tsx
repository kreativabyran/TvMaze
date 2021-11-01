import { RouteProp } from '@react-navigation/core';
import React from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView,
} from 'react-native';
import Genres from '../components/Genres';
import ShowScore from '../components/ShowScore';
import { ShowResult } from '../types';

type ShowProps = {
  route: RouteProp<{params: {item: ShowResult}}, 'params'>;
};

const Show: React.FC<ShowProps> = ({ route }) => {
  const { item } = route.params;

  if (!(item.score && item.show)) {
    return null;
  }
  const { show, score } = item;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {show.image && show.image.medium ? (
          <Image
            height={undefined}
            width={50}
            style={styles.logo}
            source={{
              uri: show.image?.medium,
            }}
          />
        ) : null}
      </View>
      {show.name ? <Text style={[styles.text, styles.textCenter]}>{show.name}</Text> : null}
      <View style={styles.row}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Genres genres={show.genres} />
        </View>
        <View style={styles.right}>
          <ShowScore score={score} />
        </View>

      </View>
      <View>
        {show.language ? <Text style={styles.text}>{show.language}</Text> : null}
        {show.id ? <Text style={styles.text}>{show.id}</Text> : null}
      </View>

      {show.summary ? <Text style={styles.text}>{show.summary}</Text> : null}

      {show.url ? <Text style={styles.text}>{show.url}</Text> : null}
    </ScrollView>
  );
};

export default Show;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 22,
  },
  imageContainer: {
    maxHeight: 250,
  },
  right: {
    alignContent: 'flex-end',
  },
  logo: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});
