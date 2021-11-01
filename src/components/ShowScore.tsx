import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type ScoreProps = {
  score: number;
}
const ShowScore: React.FC<ScoreProps> = (props) => {
  const { score } = props;
  const stars = (score * 10).toPrecision(2);
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <FontAwesomeIcon color='green' size={25} icon={faStar} />
      </View>
      {stars ? <Text style={styles.text}>{stars}</Text> : null}
    </View>
  );
};

export default ShowScore;

const textColor = '#222222';

const styles = StyleSheet.create({
  ratingContainer: {
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  starContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: textColor,
  },
});
