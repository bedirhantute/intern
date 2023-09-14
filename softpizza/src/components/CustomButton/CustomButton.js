import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b71f3',
    width: '100%',
    marginTop: 20,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

});

export default CustomButton