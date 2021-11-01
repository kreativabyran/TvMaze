import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

type GenresProps = {
  genres: string[];
}
const Genres: React.FC<GenresProps> = (props) => {
  const { genres } = props;
  if (genres) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {genres.map((a) => (
          <View key={a} style={styles.genreTag}>
            <Text style={styles.text}>{a}</Text>
          </View>
        ))}
      </View>
    );
  }
  return null;
};

export default Genres;

const styles = StyleSheet.create({
  genreTag: {
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginRight: 4,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
});
