import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const todosHandler = (text) => {
    setInputValue(text);
  };
  return (
    <View style={styles.InputContainer}>
      <TextInput
        onChangeText={todosHandler}
        value={inputValue}
        style={styles.Input}
        placeholder='Todo List'
      />
      <Button title='Add' onPress={() => onAddTodo(inputValue)} />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default TodoInput;
