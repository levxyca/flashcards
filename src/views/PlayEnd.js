import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {db} from '../config/firebase';

import HeaderNavigator from '../components/HeaderNavigator';

const PlayEnd = ({navigation}) => {
  return (
    <View>
      <HeaderNavigator title="Coleções - objetos" navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.title}>Cartão 8/8</Text>
        <View style={styles.card}>
          <View>
            <Text style={styles.text}>Frente</Text>
            <Text style={styles.textCard}>Janela</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.text}>Verso</Text>
            <Text style={styles.textCard}>Window</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Objects')}>
          <View style={styles.btnGreen}>
            <Text style={styles.textBtn}>Finalizar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: '#332E56',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    width: 321,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginTop: 30,
    marginBottom: 30,
  },
  btn: {
    paddingTop: 70,
  },
  card: {
    width: 325,
    height: 350,
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
    marginTop: 25,
    marginLeft: 30,
  },
  textCard: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#414141',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: '#414141',
    textAlign: 'center',
    margin: 40,
  },
  border: {
    borderColor: '#707070',
    borderTopWidth: 1,
    borderStyle: 'dotted',
  },
  btnGreen: {
    backgroundColor: '#61A170',
    width: 328,
    height: 46,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 2,
  },
});

export default PlayEnd;
