import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import { AuthProvider } from './src/contexts/AuthContext';
import Router from './src/routes';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
      }
    }

    updateApp();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
        <StatusBar
          translucent
          barStyle="light-content"
        />
      </AuthProvider>
    </NavigationContainer>
  );
}
