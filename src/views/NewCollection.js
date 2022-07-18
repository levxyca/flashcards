import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {db} from '../config/firebase';
import {collection, addDoc} from 'firebase/firestore';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCancel from '../components/ButtonCancel';
import ButtonPurple from '../components/ButtonPurple';

const NewCollection = ({navigation}) => {
  const [newTitle, setTitle] = useState('');
  const [newDescription, setDescription] = useState('');

  const addCollection = async () => {
    const docRef = await addDoc(collection(db, 'collections'), {
      title: newTitle,
      description: newDescription,
      img: 'https://reactnative.dev/img/tiny_logo.png',
    });

    navigation.goBack();
    console.log('Document written with ID: ', docRef.id);
  };

  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
  }, [newDescription, newTitle]);

  return (
    <View>
      <HeaderNavigator title="Minhas coleções" navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.title}>
          Preencha os dados referente á coleção a ser criada
        </Text>
        <View style={styles.text}>
          <TextInput
            placeholder="Nome da coleção"
            placeholderTextColor={'#6200EE'}
            onChangeText={value => setTitle(value)}
            defaultValue={newTitle}
          />
        </View>
        <View style={styles.description}>
          <TextInput
            placeholder="Descrição"
            placeholderTextColor={'#6200EE'}
            onChangeText={value => setDescription(value)}
            defaultValue={newDescription}
          />
        </View>
        <TouchableOpacity style={styles.image} onPress={() => {}}>
          <Text style={styles.imgText}>Imagem</Text>
          <Image style={styles.icon} source={require('../assets/add.png')} />
        </TouchableOpacity>
        <ButtonPurple
          title="Cadastrar"
          onPress={() => {
            addCollection();
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
    paddingLeft: 10,
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
    paddingLeft: 10,
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
    paddingLeft: 10,
  },
  imgText: {
    color: '#6200EE',
    paddingTop: 10,
    paddingLeft: 5,
  },
  btn: {
    paddingTop: 40,
  },
  icon: {
    width: 50,
    height: 60,
    marginHorizontal: 120,
    marginVertical: 20,
  },
});

export default NewCollection;
