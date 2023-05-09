import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App!</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup')}
        style={styles.button}
      />
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
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
});

export default WelcomeScreen;
