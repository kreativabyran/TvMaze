import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Image, StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';
import { ShowResult } from '../types';

type Props = {
  item: ShowResult;
}

const ShowListItem: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const { item } = props;

  if (
    item
      && item.show
      && item.show.id
      && item.show.name
      && item.show.image
  ) {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Show', { item })}
      >
        <View style={styles.item}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: item.show.image?.medium,
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.show.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  return null;
};

export default ShowListItem;

const textColor = '#222222';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 2,
    backgroundColor: 'white',
  },
  infoContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    maxHeight: 100,
    maxWidth: 90,
  },
  logo: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: textColor,
  },
});
