import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodosHandler = (todoTitle) => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random().toString(), value: todoTitle },
    ]);
  };

  const removeTodoHandler = (todoId) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <View style={styles.Screen}>
      <Text style={styles.Title}>MY TODO APP</Text>
      <TodoInput onAddTodo={addTodosHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todos}
        renderItem={(itemData) => (
          <TodoItem
            todoText={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeTodoHandler}
          />
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
});
