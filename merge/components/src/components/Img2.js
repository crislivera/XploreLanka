import {View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class Img2 extends Component{
    constructor() {
        super();
     
        this.state ={
          value:50
        }
     }
    renderElement(){
        if(this.state.value <=40){
            return <Icon name="md-man" color="#ccc" size={115}/>
        }else if(this.state.value <=70){
            return <Image source={require('../../../assets/1man.gif')}style={{width: 115, height: 115}}/>
        }else if(this.state.value <=100){
            return <Icon name="md-sunny" color="#ccc" size={115}/>
        }
     }
     
     render() {
         return (   
             <View style={{marginLeft:130, marginTop:-126}}>
                 { this.renderElement() }
             </View>
         );
     }
};

