import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View,Image,AsyncStorage } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default class SettingsScreen extends React.Component { 
  constructor(props){
    super(props)
    this.state = { 
      fName: '',
      lName:'',
      address: '',
      contact:'',
      email: '',
      username:'', 
      password: '',
      otp:'',
      userID : ''
  }
  }

  checkUserLogin = async () => {
      const fName = await AsyncStorage.getItem('fName');
      const lName = await AsyncStorage.getItem('lName');
      const address = await AsyncStorage.getItem('address');
      const contact = await AsyncStorage.getItem('contact');
      const email = await AsyncStorage.getItem('email');
      const username = await AsyncStorage.getItem('username');
      const password = await AsyncStorage.getItem('password');
      const userID = await AsyncStorage.getItem('userID');

      this.setState({
        fName:fName,
        lName:lName,
        address:address,
        contact:contact,
        email:email,
        username:username,
        password:password,
        userID:userID
      }) 

      if (fName != null || lName!=null || address!=null && contact!=null && email!=null && username!=null && password !=null && userID !=null) {
        console.log('user is logged in')
        this.props.navigation.navigate("AccountScreen")

      }
      else{
        alert("Please login to see your account")
      }
    
  };

  render(){
  return (
    <View style={styles.container}>
    <ScrollView style={styles.contentContainer}>
    <OptionButton
        icon="md-person"
        label="Account"
        onPress={this.checkUserLogin}
      />

      
      <OptionButton
        icon="ios-alert"
        label="About"
        onPress={ ()=> this.props.navigation.navigate('About')}
      />

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>From</Text>
        <View style={styles.infoTextContainer}>
          <View style={styles.logoContainer}>
                <Image
                  style = {styles.logo}
                  source={require('../../assets/logo_transparent.png')}>
                </Image>
              </View> 
        </View>
      </View>
   </View>
  );
}
}


function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="#1c39bb" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
   
  },
  optionIconContainer: {
    marginRight: 20,
  },
  option: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  infoText: {
    color:"#ac00e6",
    fontSize:20,
  },
  infoTextContainer: {
    borderRadius:7,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    backgroundColor:'#fff',
    flex:0.3,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 0,
      },
      android: {
        elevation: 0,
     
      },
    }),
    paddingVertical: 20,
    paddingLeft:25,
  },
  tabBarInfoText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    paddingLeft:5,
  },
  logo:{
    width:150,
    height:70,
    justifyContent: 'center',
   
  },
  logoContainer:{
   alignItems: 'flex-start',
    flexGrow:1,
    justifyContent:'center', 
  
  }
});
