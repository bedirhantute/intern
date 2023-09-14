import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const TransparentButton = ({ onPress, text }) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.component}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    component: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',

    },
    text: {
        color: "gray",
        fontWeight: "bold",
    },

});

export default TransparentButton