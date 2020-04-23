import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";

import SettingsScreen2 from './SettingsScreen2';
import AccountScreen from '../test/AccountScreen';
import Notifications from '../test/About';
import About from '../test/About';
import Logout from '../test/Logout';


const SettingsStack = createStackNavigator()

export default function SettingsNavigator ({navigation,route}){
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true,
    });
  }

  return(
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="SettingsScreen2" component={SettingsScreen2} options={{ title: 'Settings'}}/>
    <SettingsStack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Welcome'}}/> 
    <SettingsStack.Screen name="Notifications" component={Notifications} />
    <SettingsStack.Screen name="About" component={About} options={{ title: 'About'}}/>
    <SettingsStack.Screen name="Logout" component={Logout} options={{ title: 'Logout'}}/> 
  </SettingsStack.Navigator>
  );
};

