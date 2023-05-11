import React from 'react';
import Navigation from './containers/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const onBeforeLift = () => {
    // DataHelper.setStore(this.state.store.store);
    // setIsLoading(false);
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
          <Navigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
