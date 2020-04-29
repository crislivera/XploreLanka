import React, { Component } from 'react';
import { Image,AsyncStorage,Alert,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import Search, {call} from '../components/src/components/Search';
import { render } from 'react-dom';
import axios from 'axios';
import Img1 from '../components/src/components/Img1';
import Img2 from '../components/src/components/Img2';
import Img3 from '../components/src/components/Img3';
import Geocoder from 'react-native-geocoding';
import { API_KEY } from '../components/src/components/Key';

export default class Details extends Component{
    //const var2= navigation.state.params.data
    constructor() {
      super()
      this._retrieveData(); 
      this.state = {
        tinput :"",pname : "",pnumber:"",p0address:"",p1address:"",p2address:"",p3address:"",p4address:"",p5address:"",p6address:"",prating:"",
        pphotoRef:"",pbusiness:"",pOpenHour0:"",pOpenHour1:"",pOpenHour2:"",pOpenHour3:"",pOpenHour4:"",pOpenHour5:"",pOpenHour6:"",                                                                                                                                               
      }
      //this.getDetail();
      //this.detailsURI = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='+this.state.tinput+'&fields=name,rating,formatted_phone_number,adr_address&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo';
    }

    

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('super');
        this.setState({tinput:value})         
        if (value !== null) {
          // We have data!!
          console.log(value);
          //Alert.alert(value);
          this.getDetail(value);
          return value; 
        }
      } catch (error) {
        // Error retrieving data
      }
    };

    getDetail =async (value) => {  
      //const val = JSON.stringify(this._retrieveData());
      const detailsURI = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='+value+'&fields=name,business_status,opening_hours,rating,formatted_phone_number,address_components,vicinity,photos&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo';      
      //Alert.alert(detailsURI)
      axios.get(detailsURI)
      .then(res => {
        //Alert.alert(JSON.stringify(res.data.result.name))
        this.setState({
          pname: res.data.result.name,
          pnumber: res.data.result.formatted_phone_number,
          p0address: res.data.result.address_components[0].long_name,
          p1address: res.data.result.address_components[1].long_name,
          p2address: res.data.result.address_components[2].long_name,
          p3address: res.data.result.address_components[3].long_name,
          p4address: res.data.result.address_components[4].long_name,
          p5address: res.data.result.address_components[5].long_name,
          p6address: res.data.result.address_components[6].long_name,
          prating: res.data.result.rating,
          pphotoRef: res.data.result.photos[0].photo_reference,
          pbusiness: res.data.result.business_status,
          pOpenHour0: res.data.result.opening_hours.weekday_text[0],
          pOpenHour1: res.data.result.opening_hours.weekday_text[1],
          pOpenHour2: res.data.result.opening_hours.weekday_text[2],
          pOpenHour3: res.data.result.opening_hours.weekday_text[3],
          pOpenHour4: res.data.result.opening_hours.weekday_text[4],
          pOpenHour5: res.data.result.opening_hours.weekday_text[5],
          pOpenHour6: res.data.result.opening_hours.weekday_text[6],
        });
        return JSON.stringify(res.data.result);
      })
      .catch(error=>{
        console.log(error)
      });        
   }

    render() {
      const placeID = this.state.tinput;
      const placename = this.state.pname;
      const number = this.state.pnumber;
      var address0 = this.state.p0address;
      var address1 = this.state.p1address;
      var address2 = this.state.p2address;
      var address3 = this.state.p3address;
      var address4 = this.state.p4address;
      var address5 = this.state.p5address;
      var address6 = this.state.p6address;
      var rating = this.state.prating;
      const photo = this.state.pphotoRef;
      const bussiness = this.state.pbusiness;
      const openhour0 = this.state.pOpenHour0;
      const openhour1 = this.state.pOpenHour1;
      const openhour2 = this.state.pOpenHour2;
      const openhour3 = this.state.pOpenHour3;
      const openhour4 = this.state.pOpenHour4;
      const openhour5 = this.state.pOpenHour5;
      const openhour6 = this.state.pOpenHour6;
      return (
        <Container>
          <Header />
          <Content>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo'}} />
                  <Body>
                    <Text>{placename}</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+photo+'&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo'}}
                  style={{height: 300, width: 380, flex: 1}}/>
                  <Img1/>
                  <Img2/>
                  <Img3/>
                  <Text style={{color:'blue'}}>Address</Text>
                  <Text>{address0}</Text>
                  <Text>{address1}</Text>
                  <Text>{address2}</Text>
                  <Text>{address3}</Text>
                  <Text>{address4}</Text>
                  <Text>{address5}</Text>
                  <Text>{address6}</Text>
                  <Text>{number}</Text>
                  <Text style={{color:'blue'}}>Bussiness Status</Text>
                  <Text>-----------------</Text>
                  <Text>{bussiness}</Text>
                  <Text style={{color:'blue'}}>Open Time</Text>  
                  <Text>-----------------</Text>
                  <Text>{openhour0}</Text>
                  <Text>{openhour1}</Text> 
                  <Text>{openhour2}</Text> 
                  <Text>{openhour3}</Text> 
                  <Text>{openhour4}</Text> 
                  <Text>{openhour5}</Text> 
                  <Text>{openhour6}</Text>                 
                  {/* <Text>{rating}</Text> */}
                  {/* <Text>{photo}</Text> */}
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-github" />
                    <Text>{rating}</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
}
