import {View, StyleSheet, Image,AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default class Img2 extends Component{
    constructor() {
        super();
        
        this.state ={
          crowdcount:0,
        }
        this.getcrowd();
     }

     getcrowd=async ()=>{
        const crowd = AsyncStorage.getItem('crowd');
        const crowdnum=parseInt(crowd);
        this.setState({crowdcount:crowdnum})
        AsyncStorage.removeItem('crowd');
        return crowdnum;
     }

    newElement(){
        if(this.state.crowdcount ==1){
            return <Image source={require('../../../assets/man.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.crowdcount ==2){
            return <Image source={require('../../../assets/normalcrowde.png')}style={{width: 115, height: 115}}/>
        }else if(this.state.crowdcount ==3){
            return <Image source={require('../../../assets/many.png')}style={{width: 115, height: 115}}/>
        }
     }
     
     render() {
         return (   
             <View style={{marginLeft:130, marginTop:-114}}>
                 { this.newElement() }
             </View>
         );
     }
};

