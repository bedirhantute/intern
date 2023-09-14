import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton2 = ({ onPress, text }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
          <Text style={styles.text}> {text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        padding:14,
        borderRadius:5,
        marginVertical:10,
        borderWidth:2,
        borderColor:"#3b71f3",
      },
      text:{
        color:"#3b71f3",
        fontWeight:"bold",
      }

});

export default CustomButton2