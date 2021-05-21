import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const HandleValue = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>MY TODO APP</Text>
      <View style={styles.InputContainer}>
        <TextInput
          onChangeText={HandleValue}
          value={inputValue}
          style={styles.Input}
          placeholder='Todo List'
        />
        <Button title='Enter' onPress={() => {}} />
      </View>
      <View>
        <Text></Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    backgroundColor: '#fff',
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  Title: {
    marginTop: 30,
    color: '#f22',
    fontSize: 20,
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  Input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    paddingVertical: 7,
    marginRight: 10,
  },
});
