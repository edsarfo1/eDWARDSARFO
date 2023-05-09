import React from 'react';
import {View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';

const SignUp = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verifyPassword, setVerifyPassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSignUp = () => {
    if (password !== verifyPassword) {
      setModalVisible(true);
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Verify Password"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Passwords must match!</Text>
          <Button title="OK" onPress={() => setModalVisible(false)} />
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

export default SignUp;
