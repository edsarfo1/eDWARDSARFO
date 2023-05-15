import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from '../dashboard';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      // get list ofusers from AsyncStorage
      const users = await AsyncStorage.getItem('users');
      console.log(users);
      const parsedUsers = JSON.parse(users);
      console.log(parsedUsers);

      // Find the user with this username and password
      const user = parsedUsers.find(
        user => user.username === username && user.password === password,
      );
      console.log(user);

      if (user) {
        // If it exists, navigate to Dashboard
        navigation.navigate('Dashboard');
      } else {
        // If not, show an error message
        Alert.alert('Error', 'Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to login');
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
