import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {db} from '../config/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';

import {useRoute} from '@react-navigation/native';

import CardItem from './CardItem';

const CardList = ({navigation}) => {
  const route = useRoute();

  const [cards, setCards] = useState([]);

  const {id} = route.params;

  useEffect(() => {
    const getCards = async () => {
      const cardsRef = collection(db, 'cards');
      const q = query(cardsRef, where('idCollection.id', '==', id));
      const data = await getDocs(q);
      setCards(
        data.docs.map(docSearch => ({...docSearch.data(), id: docSearch.id})),
      );
    };
    getCards();
  }, [id]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={collections => collections.id}
        renderItem={({item}) => (
          <CardItem front={item.front} back={item.back} id={item.id} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default CardList;
