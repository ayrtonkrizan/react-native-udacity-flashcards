import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './navigation/Tabs';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Tabs />
//     </View>
//   );
// }

export default createAppContainer(Tabs)