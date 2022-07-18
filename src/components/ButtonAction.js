import * as React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const ButtonAction = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Image style={styles.icon} source={require('../assets/plus.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7A71AF',
    position: 'absolute',
    bottom: 120,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 60,
  },
});

export default ButtonAction;
