import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
// import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigations/RootNavigator';

const App = () => {
  return (

    <RootNavigator  />

    // <View style={styles.container}>
    //   <HomeScreen />
    // </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1
  }
})