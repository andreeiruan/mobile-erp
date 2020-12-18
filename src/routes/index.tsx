import React from 'react';
import useAuth from '../hooks/useAuth';
import Routes from './routes';

const Router: React.FC = () => {
  const { authenticated } = useAuth();

  return authenticated ? <Routes /> : <Routes />;
};

export default Router;
