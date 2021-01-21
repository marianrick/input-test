import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Hey there')}>
      <Text style={styles.buttonText}>Let's go</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#06f',
  },
  buttonText: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 20,
    textAlign: 'center',
  }
});
