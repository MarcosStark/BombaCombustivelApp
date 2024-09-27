import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main/';
import Form from './src/components/Form';

export default function App() {

  /*const[baseValue, setBaseValue] = useState(0)
  const[heightValue, setHeightValue] = useState(0)
  const[result1, setResult1] = useState(0)*/

  return ( 
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
