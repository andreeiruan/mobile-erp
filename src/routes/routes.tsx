import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ConfirmationEmailSignUp from '../screens/ConfirmationEmailSignUp';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    headerMode="none"
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="ConfirmationEmailSignUp" component={ConfirmationEmailSignUp} />
  </Stack.Navigator>
);

export default Routes;
