import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { MainNavigator } from './navigation/MainNavigator';
import { store, persistor } from './store/store';
import {createAppContainer} from'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component  {
  render(){ 
    return(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <AppContainer style={styles.container} />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
