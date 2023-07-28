import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


interface TextHeaderProps {
  title: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({ title,colors }) => {


  return (
    <View style={styles.container}>
      <View style={{ width: '50%' }}>
        <Text style={[styles.headerText, { color: colors.text }]}>{title}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.tText}>{'T..'}</Text>
        <FontAwesome name="microphone" size={20} color="#4C7DCA" style={{ marginHorizontal: 5 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tText: {
    marginRight: 10,
    fontSize: 22,
    fontWeight: '700',
    color: '#4c7dca',
  },
});

export default TextHeader;
