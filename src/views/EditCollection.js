import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {useRoute} from '@react-navigation/native';

import {db} from '../config/firebase';
import {doc, updateDoc} from 'firebase/firestore';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCancel from '../components/ButtonCancel';
import ButtonPurple from '../components/ButtonPurple';

const EditCollection = ({navigation}) => {
  const route = useRoute();

  const [newTitle, setTitle] = useState('');
  const [newDescription, setDescription] = useState('');

  const {title, id, description} = route.params;

  const updateCollection = () => {
    const collection = doc(db, 'collections', id);

    updateDoc(collection, {
      title: newTitle,
      description: newDescription,
    });

    navigation.goBack();
  };

  useEffect(() => {
    setTitle(title);
    setDescription(description);
  }, [description, title]);

  return (
    <View>
      <HeaderNavigator title="Minhas coleções" navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.title}>
          Preencha os dados referente á coleção a ser editada
        </Text>
        <View style={styles.text}>
          <TextInput
            placeholder="Nome da coleção"
            placeholderTextColor={'#6200EE'}
            onChangeText={value => setTitle(value)}
            defaultValue={title}
          />
        </View>
        <View style={styles.description}>
          <TextInput
            placeholder="Descrição"
            placeholderTextColor={'#6200EE'}
            onChangeText={value => setDescription(value)}
            defaultValue={description}
          />
        </View>
        <View style={styles.image}>
          <TextInput placeholder="Imagem" placeholderTextColor={'#6200EE'} />
          <Image style={styles.icon} source={require('../assets/img-1.png')} />
        </View>
        <ButtonPurple
          title="Salvar alterações"
          onPress={() => updateCollection()}
        />
        <View style={styles.btn}>
          <ButtonCancel
            title="Cancelar"
            onPress={() => {
              navigation.goBack();
            }}
          />
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
    width: 328,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  text: {
    width: 328,
    height: 56,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  description: {
    width: 328,
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 328,
    height: 160,
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  btn: {
    paddingTop: 40,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default EditCollection;
