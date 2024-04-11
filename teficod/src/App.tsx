/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './components/bottom_tab';


function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
      {/* <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> 
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
