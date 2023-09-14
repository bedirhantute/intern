import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomButton2 from '../../components/CustomButton2';
import TransparentButton from '../../components/TransparentButton';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState();
  const navigation = useNavigation();


  const onConfirmPressed = () => {
    navigation.navigate("Home");
  }

  const onResendPressed = () => {
    console.warn("Resend code.")
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} secureTextEntry={true} />


        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton2 text="Resend code" onPress={onResendPressed} />


        <TransparentButton text="Back to Sign in" onPress={onSignInPressed} />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051c60",
    margin: 15,
    marginBottom: 25,

  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#fdb075"
  },
});

export default ConfirmEmailScreen