import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {Navigator} from './screens/RootStackScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {screen} from './redux/slice/screenNameSlice';
const App = () => {
  useEffect(() => {
    BootSplash.hide({fade: true, duration: 2000});
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
