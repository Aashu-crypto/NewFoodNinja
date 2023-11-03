import {useSelector} from 'react-redux';
import SignInScreen from './LoginScreens/SignInScreen';
import LoginInScreen from './LoginScreens/LoginInScreen';
import {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from './LoginScreens/SignUpScreen';
import SignUpProcess1 from './LoginScreens/SignUpProcess1';
import ProfileScreen from './Profile/ProfileScreen';
import SignUpProcess2 from './LoginScreens/SignUpProcess2';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainSignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="1" component={SignUpProcess1} />

      <Stack.Screen name="2" component={SignUpProcess2} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const navigation = useSelector(state => state.screen.screen);
  useEffect(() => console.log(navigation), [navigation]);
  switch (navigation) {
    case 'MAIN':
      return <LoginInScreen />;
    case 'HOME':
      return <BottomTabNavigator />;
    case 'SIGNUP':
      return <SignUpStack />;
    default:
      return <LoginInScreen />;
  }
};
export {Navigator};
