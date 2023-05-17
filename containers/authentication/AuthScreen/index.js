import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { loginStart } from '../slices/authSlice';

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginStart({ email, password }));
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default AuthScreen;
