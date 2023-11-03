import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {screen} from '../../redux/slice/screenNameSlice';
import auth from '@react-native-firebase/auth';
const LoginInScreen = () => {
  const navigation = useSelector(state => state.screen.screen);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setState] = useState();
  const signInAnonymously = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .then(() => dispatch(screen('HOME')))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      
      style={styles.container}>
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={e => setPassword(e)}
        />
      </View>
      <Text style={{alignSelf: 'center', fontWeight: '600', fontSize: 13}}>
        {' '}
      </Text>
      <Pressable
        onPress={() => signInAnonymously(email, password)}
        style={styles.submit_btn}>
        <Text>Submit</Text>
      </Pressable>

      <View style={{marginTop: 25}}>
        <Text>Don't Have a Account,yet?</Text>

        <Pressable onPress={() => dispatch(screen('SIGNUP'))}>
          <Text style={styles.signUp}>Sign Up</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    width: 320,
    alignSelf: 'center',
  },
  submit_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15BE77',
    height: 35,

    paddingHorizontal: 50,
    borderRadius: 10,
  },
  signUp: {alignSelf: 'center', color: '#00A9FF', fontSize: 20, padding: 10},
});
