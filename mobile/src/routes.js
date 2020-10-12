import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Details from './pages/Details';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, gestureEnabled: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Routes;
