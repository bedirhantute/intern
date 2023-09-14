import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton3 from '../../components/CustomButton3';
import TransparentButton2 from '../../components/TransparentButton2';
import CustomButton2 from '../../components/CustomButton2/CustomButton2';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
  const [confirmationCode, setConfirmationCode] = useState();
  const [newPassword, setNewPassword] = useState();
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("Home");
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Confirmation code" value={confirmationCode} setValue={setConfirmationCode} secureTextEntry={false} />
        <CustomInput placeholder="Enter your new Password" value={newPassword} setValue={setNewPassword} secureTextEntry={true} />

        <CustomButton3 text="Submit" onPress={onSubmitPressed} />
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

export default NewPasswordScreen