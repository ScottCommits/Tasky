import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button';

// TODO
// ADD BUTTON FUNCTIONALITY 
// ADD CALENDAR 
// ADD PROFILES ?? SETTINGS
// NOTIFICATIONS

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tasky</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.footerContainer}>
        <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer:{
    backgroundColor: '#000',
    width: '100%',
    height: '12%',
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: '10%',
    
  },
  taskContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 0.7 / 3,
    alignItems: 'center',
  }
});
