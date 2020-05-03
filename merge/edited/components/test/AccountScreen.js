import * as React from 'react';
import {StyleSheet,Text,View,Image,AsyncStorage,Alert,TouchableOpacity} from 'react-native';
import { RectButton, ScrollView} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default class AccountScreen extends React.Component {

  constructor(props){
    super(props)
    this._retrieveData();
    this.state = { 
      fName: '',
      lName:'',
      address: '',
      contact:'',
      email: '',
      pwd:'',
      username:'', 
      userID:''
  }
  }

  _retrieveData = async () => {
    try {
      const fName = await AsyncStorage.getItem('fName');
      const lName = await AsyncStorage.getItem('lName');
      const address = await AsyncStorage.getItem('address');
      const contact = await AsyncStorage.getItem('contact');
      const email = await AsyncStorage.getItem('email');
      const username = await AsyncStorage.getItem('username');
      const pwd = await AsyncStorage.getItem('pwd');
      const userID = await AsyncStorage.getItem('userID');

      this.setState({
        fName:fName,
        lName:lName,
        address:address,
        contact:contact,
        email:email,
        username:username,
        pwd:pwd,
        userID:userID
      }) 

      if (fName != null || lName!=null || address!=null && contact!=null && email!=null && username!=null && pwd !=null && userID !=null) {
        console.log('Values are not null')
      }
    } catch (error) {
      console.log('Error')
    }
  };

  logout = async()=>{
    try {
      await AsyncStorage.removeItem('fName');
      await AsyncStorage.removeItem('lName');
      await AsyncStorage.removeItem('address');
      await AsyncStorage.removeItem('contact');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('pwd');
      await AsyncStorage.removeItem('userID');
      alert('Logout Success!');
      this.props.navigation.navigate("SettingsScreen")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
          
          <Image style={styles.avatar}
             source={require('../../assets/user.png')}/>
          <Text style={styles.name}> {this.state.fName} {this.state.lName}</Text>
          
          <Text style={styles.edit}>@{this.state.username}</Text>
          </View>
          </View>
          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>
              <OptionButton
                icon="md-person"
                label={this.state.fName}
                onPress={ ()=> this.props.navigation.navigate('UpdateFirstname')}    
              /> 
              <OptionButton
                icon="md-person"
                label={this.state.lName} 
                onPress={ ()=> this.props.navigation.navigate('UpdateLastname')}   
              /> 
              <OptionButton
              icon="ios-home"
              label ={this.state.address}
              onPress={ ()=> this.props.navigation.navigate('UpdateAddress')}  
              />
              <OptionButton
                icon="md-call"
                label={this.state.contact} 
              /> 
              <OptionButton
                icon="md-mail"
                label={this.state.email}
              /> 
             
             <OptionButton
                icon="md-lock"
                label="Change your password"
                onPress={ ()=> this.props.navigation.navigate('ChangePassword')}  
              /> 
            </View>
            </View>
            </View>

            <TouchableOpacity style={[styles.buttonContainer,styles.logoutButton]} 
            onPress={() => this.logout()}>
            <Text style={styles.saveText}>Logout</Text>
          </TouchableOpacity> 
            
      </ScrollView>
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
  header:{
    backgroundColor: "#1c39bb",
  
  },
  headerContent:{
    padding:20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius:100,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom:10,
  },
  name:{
    fontSize:25,
    color:"#fff",
    fontWeight:'600',
  },
  edit:{
    fontSize:17,
    marginTop:15,
    color:"#fff",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
   
    alignItems:'center',
   
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5,

  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:10,
  },
  arrowIconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:15,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  optionIconContainer: {
    marginRight: 30,
  },
  option: {
    width:'100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection:'row' ,
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
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:2,
    marginTop:15,
    borderWidth:2,
    borderColor:'#1c39bb',
    
  //  borderRadius:30,
    backgroundColor:'transparent',
  },
  saveButton: {
    backgroundColor: "#1c39bb",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 3,
  },
  saveText: {
    color: '#1c39bb',
    fontWeight:'bold',
    fontSize:17
  },
  
});
 