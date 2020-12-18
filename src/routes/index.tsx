import React from 'react';
import useAuth from '../hooks/useAuth';
import PrivateRoutes from './private.routes';
import Routes from './routes';

const Router: React.FC = () => {
  const { authenticated } = useAuth();

  return authenticated ? <PrivateRoutes /> : <Routes />;
};

export default Router;
