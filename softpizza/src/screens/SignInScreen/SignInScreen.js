import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import TransparentButton from '../../components/TransparentButton';
import { useNavigation } from '@react-navigation/native';



const SignInScreen = () => {
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  
  const onSignInPressed = () => {
    // validate user then =>
    navigation.navigate('Home');
  }
  const onCreateOnePressed = () => {
    navigation.navigate("SignUp");
  }
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  }
 

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Text>Sign In Screen</Text>
        <Image source={Logo} style={styles.logo, { height: height * 0.3 }} resizeMode="contain" />

        <CustomInput placeholder="e-mail address" value={emailaddress} setValue={setEmailaddress} />
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true} />

        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <TransparentButton text="Forgot Password" onPress={onForgotPasswordPressed} />
        <TransparentButton text="Don't have an account? Create one." onPress={onCreateOnePressed} />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen