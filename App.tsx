import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import Login from './src/screens/Login';

export default function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
