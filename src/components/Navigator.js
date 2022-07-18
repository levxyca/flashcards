import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';

import Routes from '../routes';

Icon.loadFont();

function firebaseConfigApp() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBlDbsgR2_tinDRVV6jKRFv3FU5s8jWC8Y',
    authDomain: 'flashcards-a5dc9.firebaseapp.com',
    projectId: 'flashcards-a5dc9',
    storageBucket: 'flashcards-a5dc9.appspot.com',
    messagingSenderId: '45910909574',
    appId: '1:45910909574:web:7a03882b9cc220bba8a707',
    measurementId: 'G-MGR4KZS0SQ',
  };

  firebase.initializeApp(firebaseConfig);
}

const Separator = () => <View style={styles.separator} />;

const Drawer = createDrawerNavigator();

const Navigator = ({navigation}) => {
  firebaseConfigApp();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 250,
          backgroundColor: '#25213E',
        },
        drawerActiveBackgroundColor: '#25213E',
        drawerLabelStyle: {
          color: '#fff',
          fontSize: 18,
          padding: 0,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Minhas coleções"
        component={Routes}
        options={{
          headerShown: false,
          drawerIcon: _config => <Icon style={styles.icon} name="sliders" />,
        }}
      />
    </Drawer.Navigator>
  );
};

function CustomDrawerContent(props) {
  function processLogout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        props.navigation.popToTop();
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <DrawerContentScrollView {...props}>
      <ProfileDrawer />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => processLogout()}
        // eslint-disable-next-line react-native/no-inline-styles
        labelStyle={{color: '#fff', fontSize: 18, marginLeft: 5}}
        icon={() => <Icon style={styles.icon} name="chevron-left" />}
      />
    </DrawerContentScrollView>
  );
}

function ProfileDrawer() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/profile.png')} style={styles.img} />
      </View>
      <View>
        <Text style={styles.text}>Fernando Soares</Text>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  separator: {
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 2,
    alignSelf: 'stretch',
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 30,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
    marginRight: -20,
  },
});

export default Navigator;
