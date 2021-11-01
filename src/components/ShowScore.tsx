import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

type ScoreProps = {
  score: number;
}
const ShowScore: React.FC<ScoreProps> = (props) => {
  const { score } = props;
  const stars = (score * 10).toPrecision(2);
  return (
    <View style={styles.ratingContainer}>
      {stars ? <Text style={styles.text}>{stars}</Text> : null}
    </View>
  );
};

export default ShowScore;

const styles = StyleSheet.create({
  ratingContainer: {
    padding: 20,
  },
  text: {
    flex: 1,
    fontSize: 16,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
