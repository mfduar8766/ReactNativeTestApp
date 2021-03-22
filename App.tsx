import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import GlobalProvider from './context';
import MainStackNavigator from './navigation/MainStackNavigator';

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
