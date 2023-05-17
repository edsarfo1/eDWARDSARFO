import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './containers/navigation/AuthNavigator';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const App = () => {
  const onBeforeLift = () => {
    // DataHelper.setStore(this.state.store.store);
    // setIsLoading(false);
  };
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
