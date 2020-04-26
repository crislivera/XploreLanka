import {View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class Img1 extends Component{
    constructor() {
        super();
     
        this.state ={
          value:"sunny"
        }
     }
    renderElement(){
        if(this.state.value == 'rainy'){
            return <Icon name="md-rainy" color="#ccc" size={195}/>
        }else if(this.state.value == 'cloudy'){
            return <Icon name="md-cloudy" color="#ccc" size={195}/>
        }else if(this.state.value == 'sunny'){
            return <Icon name="md-sunny" color="#ccc" size={195}/>
        }
     }
     
     render() {
         return (   
             <View style={{marginLeft:80}}>
                 { this.renderElement() }
             </View>
         );
     }
};

