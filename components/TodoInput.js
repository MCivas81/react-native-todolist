import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Modal } from 'react-native';

function TodoInput({ onAddTodo, visible, onCloseModal }) {
  const [inputValue, setInputValue] = useState('');

  const todoInputHandler = (text) => {
    setInputValue(text);
  };

  const addTodoHandler = () => {
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.InputContainer}>
        <Text style={styles.Title}>MY TODO APP</Text>
        <TextInput
          onChangeText={todoInputHandler}
          value={inputValue}
          style={styles.Input}
          placeholder='Todo List'
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.ButtonAdd}>
            <Button title='Add' onPress={addTodoHandler} color='#fff' />
          </View>
          <View style={styles.ButtonCancel}>
            <Button title='Cancel' onPress={onCloseModal} color='#fff' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    color: '#777',
    fontSize: 20,
    marginBottom: 50,
  },
  Input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  ButtonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  ButtonAdd: {
    width: '40%',

    borderRadius: 5,
    backgroundColor: '#179',
  },
  ButtonCancel: {
    width: '40%',

    borderRadius: 5,
    backgroundColor: '#f22',
  },
});

export default TodoInput;
