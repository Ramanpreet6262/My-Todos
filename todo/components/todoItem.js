import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// if we write props in argument, we will access it with props.item
// Or we can use destructuring and use { item } in argument itself....
export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  }
});
