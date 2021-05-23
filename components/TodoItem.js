import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function TodoItem({ todoText, id, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.Todos}>
        <Text>{todoText}</Text>
      </View>
    </TouchableOpacity>
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
