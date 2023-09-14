import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton3 from '../../components/CustomButton3';
import TransparentButton2 from '../../components/TransparentButton2';
import CustomButton2 from '../../components/CustomButton2/CustomButton2';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
  const [emailAddress, setEmailAddress] = useState();
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Email address" value={emailAddress} setValue={setEmailAddress} secureTextEntry={false} />

        <CustomButton3 text="SEND" onPress={onSendPressed} />
        <TransparentButton2 text="Back to Sign in" onPress={onSignInPressed} />

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

export default ForgotPasswordScreen