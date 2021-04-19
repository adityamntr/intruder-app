import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SwitchNavigator from '/home/aditya/Desktop/IntruApp/app/navigation/SwitchNavigator'

import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class App extends React.Component {
  render() {
      return <SwitchNavigator />
  }
}