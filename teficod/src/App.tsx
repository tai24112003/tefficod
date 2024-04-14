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
import LoginScreen from './views/LoginScreen';

// import HomeScreen from './views/homeScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
