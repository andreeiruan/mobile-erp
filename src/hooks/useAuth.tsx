import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function useAuth() {
  const context = useContext(AuthContext);

  const {
    authenticated, signIn, signOut, token,
  } = context;

  return {
    authenticated, signIn, signOut, token,
  };
}
