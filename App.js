import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackScreen from "./src/stacks/AppStackScreen"

export default App = () => {
  return (
    <NavigationContainer>
      <AppStackScreen/>
    </NavigationContainer>
  );
}