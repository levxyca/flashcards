import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ModalCustom from './Modal';

const CollectionItem = id => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Objects', {
          id: id.id,
        });
      }}>
      <View style={styles.item}>
        {id.img && <Image style={styles.logo} source={{uri: id.img}} />}
        {!!id.title && <Text style={styles.title}>{id.title}</Text>}
        <View style={styles.actions}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('EditCollection', {
                id: id.id,
                title: id.title,
                description: id.description,
              });
            }}>
            <Image style={styles.edit} source={require('../assets/edit.png')} />
          </TouchableWithoutFeedback>
          <ModalCustom pronoum={'essa'} name={'coleção'} id={id.id} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 13,
    height: 126,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#27ACA7',
    flex: 3,
    paddingLeft: 30,
  },
  img: {
    aspectRatio: 1,
    width: 70,
    flex: 1,
  },
  edit: {
    aspectRatio: 1,
    width: 36,
    height: 36,
  },
  del: {
    aspectRatio: 1,
    width: 28,
    height: 28,
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default CollectionItem;
