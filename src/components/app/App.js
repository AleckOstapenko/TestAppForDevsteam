import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from '../gallery/Gallery';
import Picture from '../picture/Picture';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Picture" component={Picture} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;