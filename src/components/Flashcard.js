import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Flashcard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>Frente</Text>
        <Text style={styles.textCard}>Brinquedo</Text>
      </View>
      <View style={styles.border}>
        <Text style={styles.text}>Verso</Text>
        <Text style={styles.textCard}>Toy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 325,
    height: 289,
    backgroundColor: '#fff',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#777777',
    marginTop: 10,
    marginLeft: 15,
  },
  textCard: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#414141',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: '#414141',
    textAlign: 'center',
    margin: 30,
  },
  border: {
    borderColor: '#707070',
    borderTopWidth: 1,
    borderStyle: 'dotted',
  },
});

export default Flashcard;
