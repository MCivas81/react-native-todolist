import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import TodoItem from './components/TodoItem';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const todosHandler = (text) => {
    setInputValue(text);
  };

  const addTodosHandler = () => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random().toString(), value: inputValue },
    ]);
  };

  return (
    <View style={styles.Screen}>
      <Text style={styles.Title}>MY TODO APP</Text>
      <View style={styles.InputContainer}>
        <TextInput
          onChangeText={todosHandler}
          value={inputValue}
          style={styles.Input}
          placeholder='Todo List'
        />
        <Button title='Add' onPress={addTodosHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todos}
        renderItem={(itemData) => (
          <TodoItem todoText={itemData.item.value} />
        )}></FlatList>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    padding: 50,
  },
  Title: {
    marginTop: 30,
    color: '#f22',
    fontSize: 20,
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  Input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
