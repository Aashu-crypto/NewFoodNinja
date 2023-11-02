import {useSelector} from 'react-redux';
import SignInScreen from './LoginScreens/SignInScreen';
import LoginInScreen from './LoginScreens/LoginInScreen';
import {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreens/HomeScreen';
import SignUpScreen from './LoginScreens/SignUpScreen';
import SignUpProcess1 from './LoginScreens/SignUpProcess1';
const Stack = createStackNavigator();
const SignUpStack = ()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name = '1' component={SignUpProcess1}/>
      <Stack.Screen name ="MainSignUpScreen" component={SignUpScreen}/>
      
    </Stack.Navigator>
  )
}
const Navigator = () => {
  const navigation = useSelector(state => state.screen.screen);
  useEffect(() => console.log(navigation), [navigation]);
  switch (navigation) {
    case 'MAIN':
      return <LoginInScreen />
    case 'HOME':
      return <HomeScreen/>
    case 'SIGNUP':
      return <SignUpStack/>
    default:
      return <LoginInScreen />;
  }
};
export {Navigator};
