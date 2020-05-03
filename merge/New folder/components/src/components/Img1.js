import {View, StyleSheet, Image, AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class Img1 extends Component{
    constructor() {
        super();
        
        this.state ={
          weatherval:'',
        }
        this.getweather();
     }

    getweather=async ()=>{
        const weather = await AsyncStorage.getItem('weather');
        console.log('Weather is '+weather);
        this.setState({weatherval:weather})
        AsyncStorage.removeItem('weather');
        return weather;
     }

    Element(){
        if(this.state.weatherval == null){
            return <Image source={require('../../../assets/noweather.jpeg')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Partly rain'){
            return <Image source={require('../../../assets/moderaterain.jpg')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Patchy light drizzle'){
            return <Image source={require('../../../assets/lightrain.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Light drizzle'){
            return <Image source={require('../../../assets/rain.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Overcast'){
            return <Image source={require('../../../assets/lightrain.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'sunny'){
            return <Image source={require('../../../assets/sunny.jpeg')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Partly cloudy'){
            return <Image source={require('../../../assets/partlycloud.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Clear'){
            return <Image source={require('../../../assets/partlycloud.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.weatherval == 'Cloudy'){
            return <Image source={require('../../../assets/cloudy.png')}style={{width: 115, height: 115}}/>
        }else{
            return <Image source={require('../../../assets/cloudy.png')}style={{width: 115, height: 115}}/>
        }
     }
     
     render() {
         return (   
             <View style={{marginLeft:10}}>
                 { this.Element() }
             </View>
         );
     }
};

