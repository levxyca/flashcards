import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonCancel = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent',
    width: 328,
    height: 46,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 2,
  },
});

export default ButtonCancel;
