import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {db} from '../config/firebase';
import {deleteDoc, doc} from 'firebase/firestore';

const ModalCustom = ({navigation, pronoum, name, id}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const deleteCollection = async () => {
    await deleteDoc(doc(db, 'collections', id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Você tem certeza que deseja excluir {pronoum} {name}?
            </Text>
            <View style={styles.actions}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={styles.textStyle}
                  onPress={() => deleteCollection(id)}>
                  Sim
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Image style={styles.del} source={require('../assets/del.png')} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 280,
    height: 128,
    backgroundColor: '#332E56',
    padding: 25,
    shadowColor: '#DED5EA',
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
    color: '#fff',
  },
});

export default ModalCustom;
