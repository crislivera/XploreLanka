import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import Signup from '../test/Signup';
import Login from '../test/Login';
import ForgotPassword from '../test/ForgotPassword';
import Plan from '../test/';
import OtpScreen from '../test/OtpScreen';

const LoginStack = createStackNavigator()

export default function LoginNavigator ({navigation,route}){
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true
    });
  }
  return(
  <LoginStack.Navigator >
    <LoginStack.Screen options={{header: () => null}} name="Login" component={Login}/>
    <LoginStack.Screen options={{header: () => null}} name="Signup" component={Signup}/>
    <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password'}}/>
    <LoginStack.Screen name="Plan" component={Plan}/>
    <LoginStack.Screen options={{header: () => null}} name="OtpScreen" component={OtpScreen}/>
  </LoginStack.Navigator>
  );
};