import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Collections from './views/Collections';
import Objects from './views/Objects';
import NewCollection from './views/NewCollection';
import EditCollection from './views/EditCollection';
import NewCard from './views/NewCard';
import EditCard from './views/EditCard';
import Play from './views/Play';
import Play2 from './views/Play2';
import Play3 from './views/Play3';
import PlayEnd from './views/PlayEnd';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    {/* Screens for logged in users */}
    <Stack.Group>
      <Stack.Screen
        name="Collections"
        component={Collections}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Objects"
        component={Objects}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Play2"
        component={Play2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Play3"
        component={Play3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlayEnd"
        component={PlayEnd}
        options={{headerShown: false}}
      />
    </Stack.Group>
    {/* Screens for actions */}
    <Stack.Group>
      <Stack.Screen
        name="NewCollection"
        component={NewCollection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditCollection"
        component={EditCollection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewCard"
        component={NewCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditCard"
        component={EditCard}
        options={{headerShown: false}}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default Routes;
