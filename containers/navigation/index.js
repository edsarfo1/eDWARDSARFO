import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/welcome';
import Login from '../../screens/login';
import Dashboard from '../../screens/dashboard';
import SignUp from '../../screens/signup';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{title: 'Signup'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
