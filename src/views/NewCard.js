import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

import {useRoute} from '@react-navigation/native';

import {db} from '../config/firebase';
import {collection, addDoc} from 'firebase/firestore';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCancel from '../components/ButtonCancel';
import ButtonPurple from '../components/ButtonPurple';
import {TextInput} from 'react-native-gesture-handler';

const NewCard = ({navigation}) => {
  const route = useRoute();

  const id = route.params;

  const [frontCard, setfrontCard] = useState('');
  const [backCard, setbackCard] = useState('');

  const newCard = async () => {
    const docRef = await addDoc(collection(db, 'cards'), {
      idCollection: id,
      front: frontCard,
      back: backCard,
    });

    navigation.goBack();
    console.log('Document written with ID: ', docRef.id);
  };

  return (
    <View>
      <HeaderNavigator title="Coleções - objetos" navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.title}>
          Preencha os dados da frente e do verso do flashcard
        </Text>
        <View style={styles.card}>
          <View>
            <Text style={styles.text}>Frente</Text>
            <TextInput
              style={styles.textCard}
              defaultValue={frontCard}
              onChangeText={value => {
                setfrontCard(value);
              }}
            />
          </View>
          <View style={styles.border}>
            <Text style={styles.text}>Verso</Text>
            <TextInput
              style={styles.textCard}
              defaultValue={backCard}
              onChangeText={value => {
                setbackCard(value);
              }}
            />
          </View>
        </View>
        <ButtonPurple
          title="Cadastrar"
          onPress={() => {
            newCard();
          }}
        />
        <View style={styles.btn}>
          <ButtonCancel title="Cancelar" onPress={() => navigation.goBack()} />
        </View>
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
    marginBottom: 40,
  },
  btn: {
    paddingTop: 70,
  },
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

export default NewCard;
