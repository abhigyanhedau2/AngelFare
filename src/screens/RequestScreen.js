import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent';

export default function requestScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      paddingTop: parameters.statusBarHeight
  }
})