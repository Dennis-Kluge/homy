/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './navigation/TabBar';
import {HomeContextProvider} from './context/HomeContext';

const App = () => {
  return (
    <NavigationContainer>
      <HomeContextProvider>
        <StatusBar barStyle="light-content" />
        <TabBar />
      </HomeContextProvider>
    </NavigationContainer>
  );
};

export default App;
