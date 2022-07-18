import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ModalCustomCard from './ModalCard';

const CollectionItem = id => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Frente</Text>
          {!!id.front && <Text style={styles.title}>{id.front}</Text>}
        </View>
        <View style={styles.text}>
          <Text>Verso</Text>
          {!!id.back && <Text style={styles.title}>{id.back}</Text>}
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('EditCard', {
              id: id.id,
              front: id.front,
              back: id.back,
            });
          }}>
          <Image style={styles.edit} source={require('../assets/edit.png')} />
        </TouchableWithoutFeedback>
        <ModalCustomCard pronoum={'esse'} name={'cartão'} id={id.id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    borderRadius: 13,
    width: 374,
    height: 74,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    flexDirection: 'row',
    flex: 3,
  },
  text: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ACA7',
  },
  edit: {
    aspectRatio: 1,
    width: 26,
    height: 26,
  },
  del: {
    aspectRatio: 1,
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 15,
    flex: 1,
  },
});

export default CollectionItem;
