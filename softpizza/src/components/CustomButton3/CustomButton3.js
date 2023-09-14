import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton3 = ({ onPress, text }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 14,
    borderRadius: 2,
    marginVertical: 10,
    backgroundColor: "orange",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  }

});

export default CustomButton3