import React from 'react';
import {View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verifyPassword, setVerifyPassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [successModalVisible, setSuccessModalVisible] = React.useState(false);

  const SignupAuth = async (username, password) => {
    try {
      const users = await AsyncStorage.getItem('users');
      const parsedUsers = JSON.parse(users) || [];

      // Check if the user exists
      const existingUser = parsedUsers.find(user => user.username === username);
      if (existingUser) {
        throw new Error('User already exists');
      }

      // Create  new user object
      const newUser = {username, password, id: Date.now()};

      // Update list of users
      const updatedUsers = [...parsedUsers, newUser];

      // Store updated list users array in asycn
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

      // Return new user
      return newUser;
    } catch (error) {
      throw new Error('Failed to sign up');
    }
  };

  const handleSignUp = async () => {
    if (password !== verifyPassword) {
      setModalVisible(true);
    } else {
      try {
        const newUser = await SignupAuth(username, password);
        setSuccessModalVisible(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSuccessModal = () => {
    setSuccessModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Verify Password"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View>
          <Text>Passwords must match!</Text>
          <Button title="OK" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Modal
        visible={successModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSuccessModalVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Successfully registered!</Text>
          <Button title="OK" onPress={handleSuccessModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default SignUpScreen;
