import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodosHandler = (todoTitle) => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random().toString(), value: todoTitle },
    ]);
    setIsModalOpen(false);
  };

  const removeTodoHandler = (todoId) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <View style={styles.Screen}>
      <Button title='ADD YOUR TODO' onPress={() => setIsModalOpen(true)} />
      <TodoInput
        visible={isModalOpen}
        onAddTodo={addTodosHandler}
        onCloseModal={closeModalHandler}
      />
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
});
