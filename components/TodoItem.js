import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TodoItem({ todoText }) {
  return (
    <View style={styles.Todos}>
      <Text>{todoText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Todos: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1,
  },
});

export default TodoItem;
