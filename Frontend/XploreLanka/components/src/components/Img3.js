import {View, StyleSheet, Image,Text,AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class Img2 extends Component{
    constructor() {
        super();
        this.start=true
        // this.getholiday();
        this.state ={
          value:'' 
        }
     }

    // getholiday=async ()=>{
    // const holiday = await AsyncStorage.getItem('holi');
    // // const holi=parseInt(holiday);
    // this.setState({value:holiday})
    // AsyncStorage.removeItem('holi');
    // return holiday;
    // }

    lastElement(){
        console.log(this.state.value);
        if( this.state.value=null ){
            return <Image source={require('../../../assets/public.jpg')}style={{width: 115, height: 115}}/>
        }else if(this.state.value=!null){
            return <Image source={require('../../../assets/normal.png')}style={{width: 115, height: 115}}/>}
        // }else if(this.state.value == 'isBank'){
        //     return <Image source={require('../../../assets/bank.jpg')}style={{width: 115, height: 115}}/>
        // }else if(this.state.value == 'isMercantile'){
        //     return <Image source={require('../../../assets/mercantile.jpg')}style={{width: 115, height: 115}}/>
        // }else if(this.state.value == 'isPoya'){
        //     return <Image source={require('../../../assets/poya.jpg')}style={{width: 115, height: 115}}/>
        // }
     }
     
     render() {
         return (   
             <View style={{marginLeft:240, marginTop:-115}}>
                 { this.lastElement() }
             </View>
         );
     }
};

