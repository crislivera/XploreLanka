import {View, StyleSheet, Image,Text } from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class Img2 extends Component{
    constructor() {
        super();
        this.start=true
        this.getholiday();
        this.state ={
          value:''
        }
     }

    getholiday=async ()=>{
    const holiday = AsyncStorage.getItem('holi');
    // const holi=parseInt(holiday);
    this.setState({value:holiday})
    AsyncStorage.removeItem('holi');
    return holiday;
    }

    lastElement(){
        if( this.start==true ){
        return <View><Text>{this.state.value}</Text></View>}
        // }else if(this.state.value == 'isPublic'){
        //     return <Image source={require('../../../assets/public.jpg')}style={{width: 115, height: 115}}/>
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

