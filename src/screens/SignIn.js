import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Logo from "../../assets/logo.png"
import { TextInput,Button } from 'react-native-paper'
import { useTheme } from 'react-native-paper';

export default function SignIn() {
  
  const [phone, setPhone] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { colors } = useTheme();

  return (
    <View style={styles.root}>

      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <TextInput
      label="Phone"
      value={phone}
      keyboardType='numeric'
      onChangeText={phone => setPhone(phone)}
      mode = "flat"
      style={{width : '100%',marginTop:10}}
    />

    <TextInput
      label="Password"
      value={pass}
      onChangeText={pass => setPass(pass)}
      mode = "flat"
      style={{width : '100%',marginTop:10}}
      secureTextEntry={true}
    />

    <Button mode="contained" style={{marginTop:20,fontSize: 30}}>Login</Button>

    </View>
  )
}

const styles = StyleSheet.create({
  root : {
    alignItems:'center',
    justifyContent: 'center',
    padding : 20,
    height: '100%'
  },
  logo: {
    width:'70%',
    maxWidth:300,
    height:140
  }
})

