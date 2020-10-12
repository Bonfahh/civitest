import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

const Index = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default Index;
