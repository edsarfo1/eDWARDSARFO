import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email, password) => {
  // Simulating API call or validation logic
  const mockResponse = {
    token: 'your-auth-token',
    user: {
      id: 'user-id',
      email: 'example@example.com',
      name: 'John Doe',
    },
  };

  await AsyncStorage.setItem('token', mockResponse.token);
  await AsyncStorage.setItem('user', JSON.stringify(mockResponse.user));

  return mockResponse;
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
};

export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem('token');
  return !!token;
};

export const getUser = async () => {
  const user = await AsyncStorage.getItem('user');
  return JSON.parse(user);
};
