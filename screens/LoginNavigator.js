import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Plan from '../screens/Plan';
import OtpScreen from '../screens/OtpScreen';

const Stack = createStackNavigator()

export default function LoginNavigator ({navigation,route}){
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true
    });
  }
  return(
  <Stack.Navigator >
    <Stack.Screen options={{header: () => null}} name="Login" component={Login}/>
    <Stack.Screen options={{header: () => null}} name="Signup" component={Signup}/>
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password'}}/>
    <Stack.Screen name="Plan" component={Plan}/>
    <Stack.Screen options={{header: () => null}} name="OtpScreen" component={OtpScreen}/>
  </Stack.Navigator>
  );
};