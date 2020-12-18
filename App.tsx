import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/AuthContext';
import SignUp from './src/screens/SignUp';

export default function App() {
  return (
    <AuthProvider>
      <SignUp />
      <StatusBar style="dark" />
    </AuthProvider>
  );
}
