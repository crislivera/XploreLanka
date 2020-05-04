import React, { Component } from 'react';
import { 
  AppRegistry,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  Alert,
  Button } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../App';
import {HomeScreen} from './Home';
import { setProvidesAudioData } from 'expo/build/AR';
//import {id} from '../components/src/components/Search';



export default class Plan extends Component {

  constructor() {
    super(); 
    this.uid = "",   
    this.state=({
      userID:"",
      location:[],
      dates:[],
      city:[],
      placeID:[],
      weather:[]
    }); 
    this._checkLogin();      
     
  }
  
  _checkLogin = async () => {
    try{
      console.log('check login test');
      const uID = await AsyncStorage.getItem('userID');
      this.uid = uID;
      console.log('userId'+uID);
      if(uID!=null){
        console.log('logged in');
        this._retrieveData();
      }else{
        Alert.alert("Please Login First");
        console.log('not logged in');
      }
    }catch(error){
      console.log('not logged in (catch)');
    }
  }

  _retrieveData = async () => {
      console.log("receiveData method");
      const placeName = await AsyncStorage.getItem('plna');
      const city = await AsyncStorage.getItem('city');
      const pID = await AsyncStorage.getItem('super');   
      const date = await AsyncStorage.getItem('date');
      const weather = await AsyncStorage.getItem('weather');
      
      var obj1=({
        userID:this.uid,
        location:[placeName],
        dates:[date],
        city:[city],
        placeID:[pID],
        weather:[weather],
      });
      
      await AsyncStorage.removeItem('plna');
      await AsyncStorage.removeItem('city');
      await AsyncStorage.removeItem('super');
      await AsyncStorage.removeItem('date');
      await AsyncStorage.removeItem('weather');
      this._setdata(obj1);  
      this._getdata();
      return obj1;      
  };

  _setdata = async (obj1) => {
    try {
      console.log(obj1);
      axios.post('https://xplorelanka.herokuapp.com/saveSchedule',obj1)           
      .then(response=>{        
        console.log(response);
      })
    } catch (error) { 
      console.log("[ERROR] - setdata to backend : "+error);
    }
  }

  _getdata = async () => {
    console.log('uid in get : '+this.uid);
    const id = 'https://xplorelanka.herokuapp.com/getSchedule?id='+this.uid;
    try {
      axios.get(id)           
      .then(response=>{
        console.log(response);
        this.setState({
          userID:response.data.userID,
          location:response.data.location,
          dates:response.data.dates,
          city:response.data.city,
          placeID:response.data.placeID,
          weather:response.data.weather
        })
        //Alert.alert(JSON.stringify(this.state.location));        
      })
    } catch (error) { 
      console.log("[ERROR] - getdata from backend : "+error);
    }
  }
  delete = async (i) =>{
    console.log('i val '+i);
    console.log('delete [city] : '+this.state.city.length);
    for(var j=0; j<this.state.city.length; j++){     
      if( this.state.city[j] == this.state.city[i] ){
        console.log('Deleting location : '+this.state.city[i]);
        this.state.city[j]=this.state.city[j+1];    
        this.state.location[j]=this.state.location[j+1];
        this.state.dates[j]=this.state.dates[j+1];
        this.state.placeID[j]=this.state.placeID[j+1];
        this.state.weather[j]=this.state.weather[j+1];                 
      }
    }
    i = null;
    console.log(this.state.city);
    this.setState({
      userID:this.state.userID,
      location:this.state.location,
      dates:this.state.dates,
      city:this.state.city,
      placeID:this.state.placeID,
      weather:this.state.weather
    })
    
    try {
      axios.post('https://xplorelanka.herokuapp.com/editSchedule',this.state)           
      .then(response=>{
        console.log(response);        
      })
    } catch (error) { 
      console.log("[ERROR] - delete data from backend : "+error);
    }
  }

  edit = ({ navigation, props })=>{
    //this.props.navigation.navigate("HomeScreen");
  }

  deleteAll = async (i) =>{
    try {
      console.log('[DELETE] - All');
      const url = 'https://xplorelanka.herokuapp.com/deleteSchedule?id='+this.uid; 
      axios.get(url)           
      .then(response=>{
        console.log('[DELETE] - All');
        console.log(response);        
      })
    } catch (error) { 
      console.log("[ERROR] - delete all data from backend : "+error);
    }
  }
   
  render() {  
    let obj2 = this.state;
    let newArray = this.state.location.map((place, i) => {
      var loc = 'loc-'+i;
      if (key = loc) {
        return (
          <View>
            <View style={styles.container}>
              <TouchableOpacity 
              onPress={()=> Alert.alert('Edit Plan','',[{text:"Edit",onPress:()=>this.edit(i)},{text:"Delete",onPress:()=>this.delete(i)},{text:"Cancel"}])}>
                <Text style={styles.name}>{place}</Text>
                <Text style={styles.userInfo}>{obj2.city[i]}</Text>
                <Text style={styles.userInfo}>{obj2.dates[i]}</Text> 
                <Text style={styles.userInfo}>{obj2.weather[i]}</Text>          
              </TouchableOpacity> 
            </View>
            <Text></Text>
          </View>
        );
      };
    });
    
    let Delete=()=>{
      return(
        <View>
          <TouchableOpacity 
            onPress={()=> this.deleteAll()}>
              <Text style={styles.userInfo}>Delete All</Text>          
            </TouchableOpacity>
        </View>
      );
    }
     

    return (
      <View>
        {newArray}
        {Delete()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ADD8E6",
    alignItems:'center',
    borderRadius:10,
    width:350,
  },
  header:{
    backgroundColor: "#dcdcdc",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});