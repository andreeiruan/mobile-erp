import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import Router from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
        <StatusBar
          translucent
          backgroundColor="#000"
          barStyle="dark-content"
        />
      </AuthProvider>
    </NavigationContainer>
  );
}
