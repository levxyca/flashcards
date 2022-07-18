import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonPurple = ({title, onPress}) => {
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
    backgroundColor: '#6A61A1',
    width: 328,
    height: 46,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 2,
  },
});

export default ButtonPurple;
