import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../../containers/authentication/AuthService'; // Update the path accordingly
import Dashboard from '../dashboard';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      // Call the login function from AuthService with the entered username and password
      const response = await login(username, password);

      // Handle successful login, e.g., navigate to the Dashboard screen
      console.log('Logged in successfully:', response);
      navigation.navigate('Dashboard');
    } catch (error) {
      // Handle login error, e.g., show an error message
      console.error('Login failed:', error);
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
});

export default LoginScreen;
