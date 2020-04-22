import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import Notifications from '../screens/Notifications';
import About from '../screens/About';
import Logout from '../screens/Logout';


const Stack = createStackNavigator()

export default function SettingsNavigator ({navigation,route}){
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true,
    });
  }

  return(
  <Stack.Navigator>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings'}}/>
    <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Welcome'}}/> 
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="About" component={About} options={{ title: 'About'}}/>
    <Stack.Screen name="Logout" component={Logout} options={{ title: 'Logout'}}/> 
  </Stack.Navigator>
  );
};

