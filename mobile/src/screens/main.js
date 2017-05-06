import React, {Component} from 'react'

import {
  View,
  Image,
  Text,
  StatusBar
} from  'react-native'

import Sql from '../config/database';
import Header from '../components/customHeader'

export default class Main extends Component {
  render()  {
    return(
      <View>
        <Header title='instagrarm' color="#59ABE3"/>
        <StatusBar
          hidden={false}
          backgroundColor="#00506b"/>
        <Text>
          Hello
        </Text>
        <Sql/>
      </View>
    )
  }
}
