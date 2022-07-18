import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './views/Login';
import Register from './views/Register';
import Navigator from './components/Navigator';

const Stack = createStackNavigator();

const RouterApp = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/*  Auth screens */}
      {/* <Stack.Group>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Group> */}
      {/* Screens for logged in users */}
      <Stack.Group>
        <Stack.Screen
          name="Navigator"
          component={Navigator}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

export default RouterApp;
