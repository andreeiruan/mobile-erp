import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import Router from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="dark" />
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}
