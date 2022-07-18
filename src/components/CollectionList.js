import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {db} from '../config/firebase';
import {collection, getDocs} from 'firebase/firestore';

import CollectionItem from './CollectionItem';

const CollectionList = ({navigation}) => {
  const [collectionsList, setCollectionsList] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      const data = await getDocs(collection(db, 'collections'));
      setCollectionsList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    getCollections();
  }, []);

  return (
    <View>
      <FlatList
        data={collectionsList}
        keyExtractor={collections => collections.id}
        renderItem={({item}) => (
          <CollectionItem
            title={item.title}
            img={item.img}
            id={item.id}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

export default CollectionList;
