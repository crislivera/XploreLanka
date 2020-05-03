import React from 'react';
import { StyleSheet, Text, View, Easing, ScrollView} from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator,TransitionPresets,CardStyleInterpolators } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from "@expo/vector-icons";
// import Home from "./screens/Home"
// import Date from './components/src/components/Date';
// import Button from './components/src/components/Button';
import Search from './components/src/components/Search';
import Map from './components/src/components/Map';
import Currentlocation from './components/src/components/Currentlocation';
import { Button } from 'galio-framework';
import Dateing from './components/src/components/Dateing';
import Details from './screens/Details';
import Plan from './screens/Plan';
import SettingsScreen from './components/test/SettingsScreen';
import Login from './components/test/Login';
import AccountScreen from './components/test/AccountScreen';
import UpdateFirstname from './components/test/UpdateFirstname';
import UpdateLastname from './components/test/UpdateLastname';
import UpdateAddress from './components/test/UpdateAddress';
import ChangePassword from './components/test/ChangePassword';
import About from './components/test/About';
import Signup from './components/test/Signup';
import ForgotPassword from './components/test/ForgotPassword';
import OtpScreen from './components/test/OtpScreen';

const Stack = createStackNavigator();
const Tab =createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeScreen=({navigation}) =>{
  // navigation.setOptions({
  //   headerRight: () =>(
  //     <Button
  //       title="Save"
  //       onPress={() => {
  //         navigation.replace("Home");
  //       }}
  //     />
  //   )
  // });
  return(
    <View>
      <Map/>
      <Currentlocation/>
      <View style={styles.nav}>
        <Search/>
        {/* <Date/> */}
        <View style={styles.but2}>
          <Dateing/>
        </View>
        <Button
            round size="small"
            color="#fff" 
            style={styles.but}
            onPress={() => navigation.navigate("Details")}>
          <Text>Search</Text>
        </Button>
      </View>
      {/* <ScrollView>
          <View style={styles.nav2}>
              <Ionicons style={{marginLeft:185}} name="ios-arrow-up" size={30} color="blue" ></Ionicons>
          </View>
        </ScrollView> */}
    </View>
  );
};
 
 const styles = StyleSheet.create({
  but: {
    marginTop: 14,
    alignSelf: 'center',
    width: 300,
    marginLeft: 90
  },
  but2: {
    marginTop: 10,
    alignSelf: 'center',
    width: 300,
    marginLeft: 90
  },
   nav: {
     backgroundColor: '#fff',
     marginTop:15,
     flexWrap:'wrap',
     height:205,
     width:400,
     borderRadius:30,
     marginLeft: 7,
   },
   nav2: {
     backgroundColor: '#fff',
     marginTop:370,
     flexWrap:'wrap',
     height:600,
     width:400,
     borderRadius:30,
     marginLeft:7,
   },
 });

// const SettingsScreen = ({ navigation }) => {
//   const isFocused = useIsFocused();
//   return(
//     // <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
//     //   <Text style={{ color: isFocused ? "green" : "black"}}>SettingsScreen</Text>
//     //   <Button title="GO To Home Screen" onPress={() => navigation.goBack()}/>
//     // </View>
//     <SettingsNavigator/>
    
//   );
// };

const HomeTabNavigator = ({navigation, route}) => {
  
  return(
  <Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon:({color,size}) =>{
      let iconName
      if(route.name == 'Home')
      {
        iconName = 'ios-home'
      }
      else if(route.name == 'Plan')
      {
        iconName = 'ios-basket'
      }
      else if(route.name == 'Login')
      {
        iconName = 'ios-person'
      }
      else if(route.name == 'Settings')
      {
        iconName = 'ios-settings'
      }
      return<Ionicons name={iconName} size={size} color={color}/>
    }
  })}>
    <Tab.Screen name="Home" component={HomeStackNavigator}/>
    <Tab.Screen name="Plan" component={PlanScreen}/>
    <Tab.Screen name="Login" component={LoginNavigator}/>
    <Tab.Screen name="Settings" component={SettingsNavigator}/>
  </Tab.Navigator>
  )
}


const PlanScreen = ({ navigation, props })=> (
  <View style={{alignSelf:'center'}}>
    <Plan/>
    <Button onPress={() =>{navigation.replace("Home")}}>Add new Location</Button>
  </View>
);

// const LoginScreen = props => (
//    <Login/>
//  );
handlerSimpleCall = () => {
  //Calling a function of other class (without arguments)
  new Plan().receiveData();
};

const DetailsScreen = ({ navigation, props })=> (
  <View style={{alignSelf:'center'}}>
    
  <Details/>
  <Button color="#50C7C7" style={{marginTop:0}} 
  onPress={() =>{ navigation.navigate("Plan",handlerSimpleCall())}}>Add Location</Button>
  
</View>
);

const HomeStackNavigator = ({navigation,route})=>{
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true
    });
  }
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen}/>
    <HomeStack.Screen name="Details" component={DetailsScreen}/>
    {/* <HomeStack.Screen name="Login" component={LoginScreen}/> */}
  </HomeStack.Navigator>
  );
};

const config = {
  animation: "spring",

  config:{
    stiffness: 1000,
    damping:50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear
  }
};

function getHeaderTitle(route){
  const routeName = route.state? route.state.routes[route.state.index]
  .name : "Home";

  switch(routeName) {
    case "Home":
      return "Home";
    case "Plan":
      return "Plan";
   case "Login":
      return "Login";
    case "Settings":
      return "Settings";
  }
}

function shouldHeaderBeShown(route){
  const routeName = route.state? route.state.routes[route.state.index]
  .name : "Home";

  switch(routeName) {
    case "Home":
      return false;
    case "Login":
      return false;
    case "Settings":
      return false;
  }
}

const LoginStack = createStackNavigator()

const LoginNavigator = ({navigation,route})=>{
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true
    });
  }
  return(
  <LoginStack.Navigator>
    <LoginStack.Screen options={{header: () => null}} name="Login" component={Login}/>
    <LoginStack.Screen name="Signup" component={Signup}/>
    <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: null}}/>
    <LoginStack.Screen name="Plan" component={PlanScreen}/>
    <LoginStack.Screen options={{header: () => null}} name="OtpScreen" component={OtpScreen}/>
  </LoginStack.Navigator>
  );
};

const SettingsStack = createStackNavigator()
const SettingsNavigator =({navigation,route})=>{
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index> 0 ? false : true,
    });
  }

  return(
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings'}}/>
    <SettingsStack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Welcome to your account'}}/> 
    <SettingsStack.Screen name="UpdateFirstname" component={UpdateFirstname} options={{ title: 'Update your first name'}}/>
    <SettingsStack.Screen name="UpdateLastname" component={UpdateLastname} options={{ title: 'Update your last name'}}/>
    <SettingsStack.Screen name="UpdateAddress" component={UpdateAddress} options={{ title: 'Update your Address'}}/>
    <SettingsStack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change your Password'}}/>
    <SettingsStack.Screen name="About" component={About} options={{ title: 'About'}}/>
    
  </SettingsStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          //headerShown:false,
          gestureDirection: "horizontal",
          //...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
          // transitionSpec: {
          //   open: config,
          //   close: closeConfig
          //}
         
        }}
        headerMode="float"
        animate="fade"
       
      >
        <Stack.Screen
          options={({route})=>({
          title:getHeaderTitle(route),
          headerShown:shouldHeaderBeShown(route)
          })}
          name="Home" component={HomeTabNavigator}
        />
        <Stack.Screen name="Settings" component= {SettingsNavigator} />
        <Stack.Screen name="Login" component= {LoginNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
