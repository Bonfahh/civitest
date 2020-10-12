import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import {StatusBar} from 'react-native';

const Index = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#47718f" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default Index;
