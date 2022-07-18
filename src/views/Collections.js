import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import CollectionList from '../components/CollectionList';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonAction from '../components/ButtonAction';

const Collections = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderNavigator title="Minhas coleções" navigation={navigation} />
      <View style={styles.adjustAction} />
      <CollectionList navigation={navigation} />
      <ButtonAction onPress={() => navigation.navigate('NewCollection')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#332E56',
    minHeight: '100%',
  },
  adjustAction: {
    marginTop: StatusBar.currentHeight,
  },
});

export default Collections;
