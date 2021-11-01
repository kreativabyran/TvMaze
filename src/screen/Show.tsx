import { RouteProp } from '@react-navigation/core';
import React from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView, Button, Linking, Alert, Platform,
} from 'react-native';
import Genres from '../components/Genres';
import ShowScore from '../components/ShowScore';
import Summary from '../components/Summary';
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

  const openLink = async () => {
    const supported = await Linking.canOpenURL(show.url);
    if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
      await Linking.openURL(show.url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${show.url}`);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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

        <View style={styles.summaryContainer}>
          {show.language ? <Text style={styles.text}>{`Language: ${show.language}`}</Text> : null}
        </View>

        <View style={styles.summaryContainer}>
          <Summary summary={show.summary} />
        </View>

        {Platform.OS === 'ios' ? (
          <View>
            <Button
              title='To tvmaze.com'
              onPress={() => openLink()}
            />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Show;
const textColor = '#222222';
const surface = 'white';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 25,
    backgroundColor: surface,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: textColor,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 22,
  },
  imageContainer: {
    maxHeight: 250,
  },
  summaryContainer: {
    paddingVertical: 5,
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
