import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

type SummaryProps = {
  summary: string | undefined;
}

/**
 * @description This component handles the summary render. I did it in this way now since there was little time to do it all.
 * This could be replaced with a WebView or something like that to further keep all the html properties.
 */
const Summary: React.FC<SummaryProps> = (props) => {
  const { summary } = props;
  if (summary) {
    const removeP = summary.replace('<p>', '');
    const removePEnd = removeP.replace('</p>', '');
    const removeBr = removePEnd.replace('<br>', '\n');
    const removeBrEnd = removeBr.replace('</br>', '\n');
    const removeBold = removeBrEnd.replace('<b>', '');
    const removeBoldEnd = removeBold.replace('</b>', '');

    return (
      <View>
        <Text style={styles.text}>{`${removeBoldEnd}`}</Text>
      </View>
    );
  }

  return (
    <Text style={styles.text}>No summary available</Text>
  );
};

export default Summary;

const textColor = '#222222';

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 16,
    color: textColor,
  },
});
