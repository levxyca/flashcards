import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const HeaderNavigator = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Image style={styles.icon} source={require('../assets/menu.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  containerTitle: {
    justifyContent: 'center',
    backgroundColor: '#4A4568',
    width: '100%',
  },
  containerBtn: {
    justifyContent: 'center',
    backgroundColor: '#4A4568',
    padding: 20,
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default HeaderNavigator;
