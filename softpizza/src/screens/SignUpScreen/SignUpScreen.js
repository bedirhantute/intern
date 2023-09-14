import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import TransparentButton from '../../components/TransparentButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  }
  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use")
  }
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy")

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>


        <CustomInput placeholder="Full name" value={fullname} setValue={setFullname} />
        <CustomInput placeholder="Phone number" value={phone} setValue={setPhone} />
        <CustomInput placeholder="E-mail address" value={emailaddress} setValue={setEmailaddress} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />

        <Text style={styles.text}>By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>.
        </Text>

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <TransparentButton text="Already have an account? Sign In." onPress={onSignInPressed} />

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

export default SignUpScreen