import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000070" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;






