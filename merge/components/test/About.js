import * as React from 'react';
import {StyleSheet,Text,View,Image,AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class About extends React.Component {

  render(){
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image
          style = {styles.logo}
          source={require('../../assets/xl.png')}/>
        </View>
        <View style={styles.textContainer}>

        <Text style={styles.text1}>
          Planning a trip to Sri Lanka? Why not plan a perfect trip with all the information in just one go.
          XploreLanka is a simple to use, Srilankan based, Journey Planning Application, where you can workout on your journey plan based on the weather, crowd, and Day that you want to visit a particular place in srilanka.
        </Text>

        <View style={styles.text2}>
        
        <Text style={styles.line1}>Contact us via</Text>
        <Text style={styles.line2}>Email : xplorelanka@gmail.com</Text>
        
        <Text style={styles.line3}>Tel : 0763358718/ 0776236886</Text>
        
        <Text style={styles.line4}>Location : 57, Ramakrishna Rd, Colombo 00600</Text>
       
        </View>
        
        </View>
    </ScrollView>

  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  
  logo:{
    width:170,
    height:170,
    margin:15,
  
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'flex-start',  
    
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:20,
    marginRight:20,
  },
  text1:{
    fontSize:16,
  },

  text2:{
    fontSize:16,
    marginTop:15
  },
  line1:{
    fontSize:16,
    marginTop:15,
    fontWeight:'bold',
    color:'blue'
  },
  line2:{
    fontSize:16,
    marginTop:15,
     marginLeft:20,
  },
  line3:{
    fontSize:16,
    marginTop:15,
    marginLeft:20,
  },
  line4:{
    fontSize:16,
    marginTop:15,
    marginLeft:20,
  },
});
