/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';


import BottomTabs from './components/bottom_tab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from './views/homeScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
  );
}

export default App;
