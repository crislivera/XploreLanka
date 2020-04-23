import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {call} from '../components/src/components/Search';
export default class Details extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo'}} />
                <Body>
                  <Text>Matara</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAD7K7dT07NnV2zvvDjqJd2I_6RUUJbFKrs047fKM4reByCv4FSw6UejOmI81p--1lK8KGKbjjYG3VdKbffLOvFp-ukiTv1DZ5B6fnt_HqHJIEGn-QiBAyu6WbubFO_mzzEhB0kaWHze9RSYVpI3quJVMIGhSTrMM4JwtlPFEvYoE4l3P0u9cXVw&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo'}}
                 style={{height: 300, width: 380, flex: 1}}/>
                <Text source={{uri: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number,adr_address&key=AIzaSyB83SfaccVha2jO_M3UD9_ly5x7I2nbMpo'}}>
                {call}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}