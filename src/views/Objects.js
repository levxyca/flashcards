import * as React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import {useRoute} from '@react-navigation/native';

import HeaderNavigator from '../components/HeaderNavigator';
import CardList from '../components/CardList';
import ButtonAction from '../components/ButtonAction';

const Objects = ({navigation}) => {
  const route = useRoute();

  const {id} = route.params;

  return (
    <View style={styles.view}>
      <HeaderNavigator title="Coleção - Objetos" navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.text}>
          <TextInput
            placeholderTextColor={'#6200EE'}
            placeholder="Filtro"
            onChangeText={() => {}}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Play', {id: id})}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Jogar!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <CardList navigation={navigation} id={id} />
      <ButtonAction onPress={() => navigation.navigate('NewCard', {id: id})} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#423F5D',
    minHeight: '100%',
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  btnAction: {
    margin: 100,
  },
  text: {
    width: 374,
    height: 56,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#57966A',
    width: 157,
    height: 49,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Objects;
