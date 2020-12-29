import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import api from '../services/api';

export interface IAuthContextData{
  authenticated: boolean
  token: string | null
  signIn(token: string): Promise<void> // eslint-disable-line
  signOut(): Promise<void>
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  async function loadStorageData():Promise<void> {
    const tokenStorage = await AsyncStorage.getItem('@erpamb:token');

    setToken(tokenStorage);
    setAuthenticated(!!tokenStorage);
  }

  async function signIn(tokenParam: string): Promise<void> {
    await AsyncStorage.setItem('@erpamb:token', tokenParam);
    await loadStorageData();
  }

  async function signOut(): Promise<void> {
    await AsyncStorage.clear();
    await loadStorageData();
  }

  async function isAuthenticated() {
    await SplashScreen.preventAutoHideAsync();
    await loadStorageData();
    if (!token) {
      setAuthenticated(false);
      await SplashScreen.hideAsync();
      return;
    }

    const { status } = await api.get('/bot/history'); // todo: route token validation
    if (status !== 200) {
      setAuthenticated(false);
      await SplashScreen.hideAsync();
      return;
    }

    setAuthenticated(true);
    await SplashScreen.hideAsync();
  }

  useEffect(() => {
    isAuthenticated();
  }, [token]);

  return (
    <AuthContext.Provider value={{
      authenticated, token, signIn, signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
