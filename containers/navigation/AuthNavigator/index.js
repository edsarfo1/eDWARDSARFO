import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../screens/login';
import SignupScreen from '../../../screens/signup';
import WelcomeScreen from '../../../screens/welcome';
import Dashboard from '../../../screens/dashboard';
import CartScreen from '../../../screens/basket';
import {isAuthenticated} from '../../authentication/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const [initialRoute, setInitialRoute] = useState('Welcome');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authenticated = await isAuthenticated();
        setInitialRoute(authenticated ? 'Dashboard' : 'Welcome');
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    // You can render a loading screen while checking authentication
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
