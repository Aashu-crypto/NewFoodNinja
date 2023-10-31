import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const LoginInScreen = () => {
  const [userInfo, setState] = useState();
 
  return (
    <View style={styles.container}>
      <Text>LoginInScreen {}</Text>

      <View>
        <Image
          source={require('../../assets/img/splashlogo.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.login_text}>Login To Your Account</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <Text style={{alignSelf: 'center', fontWeight: '600', fontSize: 13}}>
        or continue with{' '}
      </Text>
      <Pressable
        onPress={() => signIn()}
        style={{height: 100, width: 100, backgroundColor: 'red'}}>
        <Text>Press ME</Text>
      </Pressable>
    </View>
  );
};

export default LoginInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 190,
    width: 180,
    alignSelf: 'center',
    marginTop: 18,
  },
  login_text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
